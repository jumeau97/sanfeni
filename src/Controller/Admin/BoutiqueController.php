<?php

namespace App\Controller\Admin;

use App\Entity\Boutique;
use App\Entity\Product;
use App\Form\Admin\AdminBoutiqueType;
use App\Service\Admin\AdminScope;
use App\Service\Admin\ShopAccountCreator;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * CRUD Boutiques (multi-vendeurs).
 *
 *  · Administrateur → toutes les boutiques, création et suppression ;
 *     à la création, un compte de gestionnaire est créé + envoyé par e-mail
 *     (ShopAccountCreator, qui remplaçait l'ancien listener EasyAdmin).
 *  · Vendeur         → SA seule boutique : consultation et mise à jour de
 *     ses coordonnées, sans création ni suppression.
 */
#[Route('/admin/boutiques', name: 'admin_boutique_')]
final class BoutiqueController extends AbstractAdminController
{
    public function __construct(
        AdminScope $scope,
        EntityManagerInterface $entityManager,
        PaginatorInterface $paginator,
        private readonly ShopAccountCreator $shopAccountCreator,
    ) {
        parent::__construct($scope, $entityManager, $paginator);
    }

    #[Route('', name: 'index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        $this->guard();

        $qb = $this->entityManager->createQueryBuilder()
            ->select('b')
            ->from(Boutique::class, 'b')
            ->orderBy('b.name', 'ASC');

        $q = trim((string) $request->query->get('q', ''));
        if ($q !== '') {
            $qb->andWhere('b.name LIKE :q OR b.email LIKE :q')->setParameter('q', '%' . $q . '%');
        }

        $this->scope->applyBoutiqueScope($qb, 'b');

        $pagination = $this->paginator->paginate(
            $qb,
            max(1, $request->query->getInt('page', 1)),
            20
        );

        return $this->renderAdmin('admin/boutique/index.html.twig', [
            'pagination' => $pagination,
            'filters' => ['q' => $q],
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $this->guard();
        $this->scope->assertCanManageGlobalData();

        $boutique = new Boutique();
        $form = $this->createForm(AdminBoutiqueType::class, $boutique);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if (!$boutique->getState()) {
                $boutique->setState('actif');
            }

            $this->entityManager->persist($boutique);
            $this->entityManager->flush();

            // Création du compte de gestionnaire + envoi des identifiants.
            $accountCreated = $this->shopAccountCreator->createCredentialsFor($boutique);

            $this->addFlash(
                'success',
                $accountCreated
                    ? sprintf(
                        'La boutique « %s » a été créée et un compte de gestionnaire a été envoyé à %s.',
                        $boutique->getName(),
                        $boutique->getEmail()
                    )
                    : sprintf('La boutique « %s » a été créée.', $boutique->getName())
            );

            return $this->redirectToRoute('admin_boutique_index');
        }

        return $this->renderAdmin('admin/boutique/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'show', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function show(Boutique $boutique): Response
    {
        $this->guard();
        $this->scope->assertBoutique($boutique);

        $productCount = $this->entityManager->createQueryBuilder()
            ->select('COUNT(p.id)')
            ->from(Product::class, 'p')
            ->where('p.shop = :boutique')
            ->setParameter('boutique', $boutique)
            ->getQuery()
            ->getSingleScalarResult();

        return $this->renderAdmin('admin/boutique/show.html.twig', [
            'boutique' => $boutique,
            'productCount' => (int) $productCount,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', requirements: ['id' => '\d+'], methods: ['GET', 'POST'])]
    public function edit(Boutique $boutique, Request $request): Response
    {
        $this->guard();
        $this->scope->assertBoutique($boutique);

        $form = $this->createForm(AdminBoutiqueType::class, $boutique);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();

            $this->addFlash('success', sprintf('La boutique « %s » a été mise à jour.', $boutique->getName()));

            return $this->redirectToRoute('admin_boutique_show', ['id' => $boutique->getId()]);
        }

        return $this->renderAdmin('admin/boutique/edit.html.twig', [
            'boutique' => $boutique,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}/delete', name: 'delete', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function delete(Boutique $boutique, Request $request): Response
    {
        $this->guard();
        $this->scope->assertCanManageGlobalData();

        if (!$this->isCsrfTokenValid('submit', (string) $request->request->get('_token'))) {
            $this->addFlash('error', 'Jeton de sécurité invalide, veuillez réessayer.');

            return $this->redirectToRoute('admin_boutique_index');
        }

        if ($boutique->getProducts()->count() > 0 || $boutique->getUsers()->count() > 0) {
            $this->addFlash(
                'error',
                'Impossible de supprimer cette boutique : elle possède encore des produits ou des comptes utilisateurs.'
            );

            return $this->redirectToRoute('admin_boutique_index');
        }

        $name = $boutique->getName();
        $this->entityManager->remove($boutique);
        $this->entityManager->flush();

        $this->addFlash('success', sprintf('La boutique « %s » a été supprimée.', $name));

        return $this->redirectToRoute('admin_boutique_index');
    }
}
