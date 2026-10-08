<?php

namespace App\Controller\Admin;

use App\Entity\Order;
use App\Entity\OrderDetails;
use App\Enum\OrderLineState;
use App\Enum\OrderState;
use App\Service\Admin\AdminScope;
use App\Service\Admin\OrderStatusSynchronizer;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Espace Commandes — le cœur de la gestion multi-vendeurs.
 *
 * LISTE : seules les commandes contenant AU MOINS UN article de la boutique
 * de l'utilisateur sont visibles (pour l'admin : toutes).
 *
 * DÉTAIL : un vendeur ne voit QUE SES lignes (les articles des autres
 * boutiques sont masqués) et peut, pour chacune d'elles, choisir de :
 *
 *     ✓ VALIDER    → « Validée »
 *     ✗ REFUSER    → « Refusée »
 *     ↻ changer de statut librement (En attente, Préparation, Expédiée, Livrée)
 *
 * L'état GLOBAL de la commande est ensuite recalculé automatiquement à
 * partir de l'ensemble des lignes (OrderStatusSynchronizer).
 * Seul un administrateur peut forcer l'état de la commande entière.
 */
#[Route('/admin/commandes', name: 'admin_order_')]
final class OrderController extends AbstractAdminController
{
    public function __construct(
        AdminScope $scope,
        EntityManagerInterface $entityManager,
        PaginatorInterface $paginator,
        private readonly OrderStatusSynchronizer $statusSynchronizer,
    ) {
        parent::__construct($scope, $entityManager, $paginator);
    }

    #[Route('', name: 'index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        $this->guard();

        $qb = $this->entityManager->createQueryBuilder()
            ->select('o')
            ->addSelect('u')
            ->from(Order::class, 'o')
            ->join('o.user', 'u')
            ->orderBy('o.id', 'DESC');

        $q = trim((string) $request->query->get('q', ''));
        if ($q !== '') {
            $qb->andWhere(
                'o.reference LIKE :q OR u.email LIKE :q OR u.firstName LIKE :q OR u.lastName LIKE :q'
            )->setParameter('q', '%' . $q . '%');
        }

        $state = (string) $request->query->get('state', '');
        if ($state !== '') {
            $qb->andWhere('o.state = :state')->setParameter('state', $state);
        }

        // Filtre multi-vendeur : le vendeur ne voit QUE ses commandes.
        $this->scope->applyOrderScope($qb, 'o');

        $pagination = $this->paginator->paginate(
            $qb,
            max(1, $request->query->getInt('page', 1)),
            15
        );

        return $this->renderAdmin('admin/order/index.html.twig', [
            'pagination' => $pagination,
            'filters' => ['q' => $q, 'state' => $state],
        ]);
    }

    #[Route('/{id}', name: 'show', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function show(Order $order): Response
    {
        $this->guard();

        if (!$this->scope->orderInScope($order)) {
            throw $this->createNotFoundException(
                "Aucun article de cette commande ne concerne votre boutique."
            );
        }

        $lines = $this->scope->visibleLines($order);
        $hiddenCount = $order->getOrderDetails()->count() - count($lines);

        $visibleTotal = 0.0;
        foreach ($lines as $line) {
            $visibleTotal += $line->getPrice() * $line->getQuantity();
        }

        return $this->renderAdmin('admin/order/show.html.twig', [
            'order' => $order,
            'lines' => $lines,
            'hiddenCount' => $hiddenCount,
            'visibleTotal' => $visibleTotal,
        ]);
    }

    /**
     * Changement d'état d'UNE ligne de commande (action du vendeur).
     *
     * Le champ rapide `quick_state` (boutons Valider / Refuser) prime sur
     * le champ `state` (liste déroulante « autre statut »).
     */
    #[Route('/{id}/lignes/{lineId}', name: 'line_status', requirements: ['id' => '\d+', 'lineId' => '\d+'], methods: ['POST'])]
    public function lineStatus(Order $order, int $lineId, Request $request): Response
    {
        $this->guard();
        $this->scope->assertOrder($order);

        /** @var OrderDetails|null $line */
        $line = $this->entityManager->find(OrderDetails::class, $lineId);
        if (!$line) {
            throw $this->createNotFoundException('Ligne de commande introuvable.');
        }

        $this->scope->assertLineInScope($order, $line);

        if (!$this->isCsrfTokenValid('submit', (string) $request->request->get('_token'))) {
            $this->addFlash('error', 'Jeton de sécurité invalide, veuillez réessayer.');

            return $this->redirectToRoute('admin_order_show', ['id' => $order->getId()]);
        }

        $value = (string) ($request->request->get('quick_state') ?: $request->request->get('state') ?: '');
        $newState = OrderLineState::tryFrom($value);

        if (!$newState) {
            $this->addFlash('error', 'Statut inconnu, veuillez réessayer.');

            return $this->redirectToRoute('admin_order_show', ['id' => $order->getId()]);
        }

        $line->setState($newState->value);
        // L'état de la commande entière découle de l'état de ses lignes.
        $this->statusSynchronizer->sync($order);
        $this->entityManager->flush();

        $this->addFlash(
            'success',
            sprintf(
                '« %s » (x%d) → statut mis à jour : %s. Commande %s : %s.',
                $line->getProduct(),
                $line->getQuantity(),
                $newState->value,
                $order->getReference(),
                $order->getState()
            )
        );

        return $this->redirectToRoute('admin_order_show', ['id' => $order->getId()]);
    }

    /**
     * Forçage de l'état GLOBAL de la commande — réservé à l'administrateur
     * (le vendeur agit uniquement au niveau de ses lignes).
     */
    #[Route('/{id}/statut', name: 'status', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function status(Order $order, Request $request): Response
    {
        $this->guard();
        $this->scope->assertCanManageGlobalData();
        $this->scope->assertOrder($order);

        if (!$this->isCsrfTokenValid('submit', (string) $request->request->get('_token'))) {
            $this->addFlash('error', 'Jeton de sécurité invalide, veuillez réessayer.');

            return $this->redirectToRoute('admin_order_show', ['id' => $order->getId()]);
        }

        $rawState = $request->request->get('state');
        $state = is_string($rawState) && $rawState !== ''
            ? OrderState::tryFromLegacy($rawState)
            : null;

        if (!$state) {
            $this->addFlash('error', 'Statut inconnu, veuillez réessayer.');

            return $this->redirectToRoute('admin_order_show', ['id' => $order->getId()]);
        }

        $order->setState($state->value);

        if ($state === OrderState::Delivered) {
            $order->setIsPaid(true);
        }
        if ($state === OrderState::Refused) {
            $order->setIsPaid(false);
        }

        $this->entityManager->flush();

        $this->addFlash(
            'success',
            sprintf('La commande %s est maintenant « %s ».', $order->getReference(), $state->value)
        );

        return $this->redirectToRoute('admin_order_show', ['id' => $order->getId()]);
    }
}
