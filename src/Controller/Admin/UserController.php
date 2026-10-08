<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\Admin\AdminUserType;
use App\Security\CredentialsMailer;
use App\Security\TemporaryPasswordGenerator;
use App\Service\Admin\AdminScope;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

/**
 * CRUD Utilisateurs.
 *
 *  · Administrateur → tous les comptes, gestion des rôles, création,
 *    modification, suppression.
 *  · Vendeur         → uniquement les comptes rattachés à SA boutique,
 *    sans pouvoir modifier les rôles (il ne peut pas se créer admin).
 */
#[Route('/admin/utilisateurs', name: 'admin_user_')]
final class UserController extends AbstractAdminController
{
    public function __construct(
        AdminScope $scope,
        EntityManagerInterface $entityManager,
        PaginatorInterface $paginator,
        private readonly UserPasswordHasherInterface $passwordHasher,
        private readonly TemporaryPasswordGenerator $passwordGenerator,
        private readonly CredentialsMailer $credentialsMailer,
        private readonly LoggerInterface $logger,
    ) {
        parent::__construct($scope, $entityManager, $paginator);
    }

    #[Route('', name: 'index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        $this->guard();

        $qb = $this->entityManager->createQueryBuilder()
            ->select('u')
            ->addSelect('b')
            ->from(User::class, 'u')
            ->leftJoin('u.shop', 'b')
            ->orderBy('u.id', 'DESC');

        $q = trim((string) $request->query->get('q', ''));
        if ($q !== '') {
            $qb->andWhere('u.email LIKE :q OR u.firstName LIKE :q OR u.lastName LIKE :q')
                ->setParameter('q', '%' . $q . '%');
        }

        if ($this->scope->isSuperAdmin()) {
            $shopId = $this->queryInt($request, 'boutique', 0);
            if ($shopId > 0) {
                $qb->andWhere('u.shop = :boutique')->setParameter('boutique', $shopId);
            }
        } else {
            $this->scope->applyUserScope($qb, 'u');
        }

        $pagination = $this->paginator->paginate(
            $qb,
            max(1, $this->queryInt($request, 'page', 1)),
            20
        );

        return $this->renderAdmin('admin/user/index.html.twig', [
            'pagination' => $pagination,
            'boutiques' => $this->scope->isSuperAdmin()
                ? $this->entityManager->getRepository(\App\Entity\Boutique::class)
                    ->createQueryBuilder('b')
                    ->orderBy('b.name', 'ASC')
                    ->getQuery()
                    ->getResult()
                : [],
            'filters' => [
                'q' => $q,
                'boutique' => $this->scope->isSuperAdmin() ? $this->queryInt($request, 'boutique', 0) : 0,
            ],
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $this->guard();

        $user = new User();
        $isSuperAdmin = $this->scope->isSuperAdmin();

        if (!$isSuperAdmin) {
            // Un vendeur crée des comptes uniquement dans sa boutique.
            $user->setShop($this->scope->shop());
            $user->setRoles(['ROLE_USER']);
        }

        $form = $this->createForm(AdminUserType::class, $user, [
            'with_roles' => $isSuperAdmin,
            'with_shop' => $isSuperAdmin,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $plainPassword = $this->applyPassword($user);

            $this->entityManager->persist($user);
            $this->entityManager->flush();

            $this->sendCredentials($user, $plainPassword);
            $user->setPlainPassword(null);
            $this->entityManager->flush();

            $this->addFlash('success', sprintf('Le compte de %s a été créé.', $user->getEmail()));

            return $this->redirectToRoute('admin_user_index');
        }

        return $this->renderAdmin('admin/user/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'show', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function show(User $user): Response
    {
        $this->guard();
        $this->scope->assertUser($user);

        return $this->renderAdmin('admin/user/show.html.twig', [
            'account' => $user,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', requirements: ['id' => '\d+'], methods: ['GET', 'POST'])]
    public function edit(User $user, Request $request): Response
    {
        $this->guard();
        $this->scope->assertUser($user);

        $isSuperAdmin = $this->scope->isSuperAdmin();
        $form = $this->createForm(AdminUserType::class, $user, [
            'with_roles' => $isSuperAdmin,
            'with_shop' => $isSuperAdmin,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Champ vide à la modification : on conserve le mot de passe actuel.
            if ($user->getPlainPassword()) {
                $plainPassword = $this->applyPassword($user);
                $this->entityManager->flush();
                $this->sendCredentials($user, $plainPassword);
            }

            $user->setPlainPassword(null);
            $this->entityManager->flush();

            $this->addFlash('success', sprintf('Le compte de %s a été mis à jour.', $user->getEmail()));

            return $this->redirectToRoute('admin_user_show', ['id' => $user->getId()]);
        }

        return $this->renderAdmin('admin/user/edit.html.twig', [
            'account' => $user,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}/delete', name: 'delete', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function delete(User $user, Request $request): Response
    {
        $this->guard();
        $this->scope->assertUser($user);

        if (!$this->isCsrfTokenValid('submit', (string) $request->request->get('_token'))) {
            $this->addFlash('error', 'Jeton de sécurité invalide, veuillez réessayer.');

            return $this->redirectToRoute('admin_user_index');
        }

        if ($user->getId() === $this->getUser()?->getId()) {
            $this->addFlash('error', 'Vous ne pouvez pas supprimer votre propre compte.');

            return $this->redirectToRoute('admin_user_index');
        }

        $email = $user->getEmail();
        $this->entityManager->remove($user);
        $this->entityManager->flush();

        $this->addFlash('success', sprintf('Le compte %s a été supprimé.', $email));

        return $this->redirectToRoute('admin_user_index');
    }

    /**
     * Mot de passe saisi ou mot de passe provisoire généré + haché.
     * Retourne le mot de passe en clair (à envoyer par e-mail puis oublier).
     */
    private function applyPassword(User $user): string
    {
        $plainPassword = $user->getPlainPassword() ?: $this->passwordGenerator->generate();
        $user->setPlainPassword($plainPassword);
        $user->setPassword($this->passwordHasher->hashPassword($user, $plainPassword));

        return $plainPassword;
    }

    private function sendCredentials(User $user, string $plainPassword): void
    {
        try {
            $this->credentialsMailer->send($user, $plainPassword);
        } catch (\Throwable $exception) {
            $this->logger->error(
                "Envoi des identifiants impossible pour {$user->getEmail()} : " . $exception->getMessage(),
                ['exception' => $exception]
            );
        }
    }
}
