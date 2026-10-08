<?php

namespace App\Controller\Admin;

use App\Controller\QueryIntTrait;
use App\Service\Admin\AdminScope;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

/**
 * Contrôleur de base de TOUS les écrans du back-office sur mesure.
 *
 * Chaque contrôleur enfant déclare ses routes sous le préfixe /admin et
 * hérite :
 *
 *   · du contrôle d'accès global ($this->guard()) — doublé de
 *     AdminAccessSubscriber pour rester protégé même si ce listener est
 *     désactivé ;
 *   · de l'EntityManager et du paginator (KnpPaginator) injectés ;
 *   · des helpers de rendu.
 *
 * Le filtrage multi-vendeur est appliqué via $this->scope (AdminScope).
 */
abstract class AbstractAdminController extends AbstractController
{
    use QueryIntTrait;

    public function __construct(
        protected readonly AdminScope $scope,
        protected readonly EntityManagerInterface $entityManager,
        protected readonly PaginatorInterface $paginator,
    ) {
    }

    protected function guard(): void
    {
        $this->scope->guard();
    }

    /**
     * Rend une page du back-office.
     *
     * @param array<string, mixed> $parameters
     */
    protected function renderAdmin(string $template, array $parameters = []): Response
    {
        return $this->render($template, $parameters);
    }
}
