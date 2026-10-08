<?php

namespace App\Controller\Admin;

use App\Entity\Carrier;
use App\Form\Admin\AdminCarrierType;
use App\Service\Admin\AdminScope;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * CRUD Transporteurs — configuration globale, réservée aux administrateurs
 * en écriture (lecture pour tous, un vendeur en a besoin à la commande).
 */
#[Route('/admin/transporteurs', name: 'admin_carrier_')]
final class CarrierController extends AbstractAdminController
{
    public function __construct(
        AdminScope $scope,
        EntityManagerInterface $entityManager,
        PaginatorInterface $paginator,
    ) {
        parent::__construct($scope, $entityManager, $paginator);
    }

    #[Route('', name: 'index', methods: ['GET'])]
    public function index(): Response
    {
        $this->guard();

        $carriers = $this->entityManager->getRepository(Carrier::class)->findAll();

        return $this->renderAdmin('admin/carrier/index.html.twig', [
            'carriers' => $carriers,
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $this->guard();
        $this->scope->assertCanManageGlobalData();

        $carrier = new Carrier();
        $form = $this->createForm(AdminCarrierType::class, $carrier);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($carrier);
            $this->entityManager->flush();

            $this->addFlash('success', sprintf('Le transporteur « %s » a été créé.', $carrier->getName()));

            return $this->redirectToRoute('admin_carrier_index');
        }

        return $this->renderAdmin('admin/carrier/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'show', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function show(Carrier $carrier): Response
    {
        $this->guard();

        return $this->renderAdmin('admin/carrier/show.html.twig', [
            'carrier' => $carrier,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', requirements: ['id' => '\d+'], methods: ['GET', 'POST'])]
    public function edit(Carrier $carrier, Request $request): Response
    {
        $this->guard();
        $this->scope->assertCanManageGlobalData();

        $form = $this->createForm(AdminCarrierType::class, $carrier);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();

            $this->addFlash('success', sprintf('Le transporteur « %s » a été mis à jour.', $carrier->getName()));

            return $this->redirectToRoute('admin_carrier_index');
        }

        return $this->renderAdmin('admin/carrier/edit.html.twig', [
            'carrier' => $carrier,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}/delete', name: 'delete', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function delete(Carrier $carrier, Request $request): Response
    {
        $this->guard();
        $this->scope->assertCanManageGlobalData();

        if (!$this->isCsrfTokenValid('submit', (string) $request->request->get('_token'))) {
            $this->addFlash('error', 'Jeton de sécurité invalide, veuillez réessayer.');

            return $this->redirectToRoute('admin_carrier_index');
        }

        $name = $carrier->getName();
        $this->entityManager->remove($carrier);
        $this->entityManager->flush();

        $this->addFlash('success', sprintf('Le transporteur « %s » a été supprimé.', $name));

        return $this->redirectToRoute('admin_carrier_index');
    }
}
