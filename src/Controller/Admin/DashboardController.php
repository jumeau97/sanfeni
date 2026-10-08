<?php

namespace App\Controller\Admin;

use App\Service\Admin\AdminScope;
use App\Service\Admin\AdminStats;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Tableau de bord du back-office sur mesure.
 *
 * Les indicateurs sont calculés dans le périmètre de l'utilisateur :
 * toute la marketplace pour l'admin, sa seule boutique pour le vendeur.
 */
#[Route('/admin', name: 'admin_')]
final class DashboardController extends AbstractAdminController
{
    public function __construct(
        AdminScope $scope,
        EntityManagerInterface $entityManager,
        PaginatorInterface $paginator,
        private readonly AdminStats $stats,
    ) {
        parent::__construct($scope, $entityManager, $paginator);
    }

    #[Route('', name: 'dashboard', methods: ['GET'])]
    public function index(): Response
    {
        $this->guard();

        return $this->renderAdmin('admin/dashboard/index.html.twig', [
            'stats' => $this->stats->for($this->scope),
            'recentOrders' => $this->stats->recentOrders($this->scope),
        ]);
    }
}
