<?php

namespace App\Service\Admin;

use App\Entity\Boutique;
use App\Entity\Category;
use App\Entity\Order;
use App\Entity\OrderDetails;
use App\Entity\Product;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Indicateurs du tableau de bord, toujours calculés DANS LE PÉRIMÈTRE de
 * l'utilisateur connecté (toute la marketplace pour l'admin, la seule
 * boutique du vendeur pour lui).
 */
final class AdminStats
{
    public function __construct(private readonly EntityManagerInterface $entityManager)
    {
    }

    /**
     * @return array<string, int|float>
     */
    public function for(AdminScope $scope): array
    {
        $em = $this->entityManager;

        // --- Produits (périmètre vendeur/admin) ---
        $productQb = $em->createQueryBuilder()
            ->select('COUNT(p.id)')
            ->from(Product::class, 'p');
        $scope->applyProductScope($productQb, 'p');
        $products = (int) $productQb->getQuery()->getSingleScalarResult();

        // --- Commandes (périmètre vendeur/admin) ---
        $orderQb = $em->createQueryBuilder()
            ->select('COUNT(DISTINCT o.id)')
            ->from(Order::class, 'o');
        $scope->applyOrderScope($orderQb, 'o');
        $orders = (int) $orderQb->getQuery()->getSingleScalarResult();

        $pendingQb = $em->createQueryBuilder()
            ->select('COUNT(DISTINCT o.id)')
            ->from(Order::class, 'o')
            ->andWhere('o.state = :pending')
            ->setParameter('pending', 'En attente');
        $scope->applyOrderScope($pendingQb, 'o');
        $pendingOrders = (int) $pendingQb->getQuery()->getSingleScalarResult();

        // --- Chiffre d'affaires des lignes du périmètre ---
        $revenueQb = $em->createQueryBuilder()
            ->select('COALESCE(SUM(d.price * d.quantity), 0)')
            ->from(OrderDetails::class, 'd')
            ->join('d.commande', 'o');
        $scope->applyOrderScope($revenueQb, 'o');
        $revenue = (float) $revenueQb->getQuery()->getSingleScalarResult();

        // --- Comptes globaux (admin) / équipe boutique (vendeur) ---
        $userQb = $em->createQueryBuilder()
            ->select('COUNT(u.id)')
            ->from(User::class, 'u');
        $scope->applyUserScope($userQb, 'u');
        $users = (int) $userQb->getQuery()->getSingleScalarResult();

        $boutiqueQb = $em->createQueryBuilder()
            ->select('COUNT(b.id)')
            ->from(Boutique::class, 'b');
        $scope->applyBoutiqueScope($boutiqueQb, 'b');
        $boutiques = (int) $boutiqueQb->getQuery()->getSingleScalarResult();

        $categories = (int) $em->createQueryBuilder()
            ->select('COUNT(c.id)')
            ->from(Category::class, 'c')
            ->getQuery()
            ->getSingleScalarResult();

        return [
            'products' => $products,
            'orders' => $orders,
            'pendingOrders' => $pendingOrders,
            'revenue' => $revenue,
            'users' => $users,
            'boutiques' => $boutiques,
            'categories' => $categories,
        ];
    }

    /**
     * Dernières commandes du périmètre, pour le tableau de bord.
     *
     * @return list<Order>
     */
    public function recentOrders(AdminScope $scope, int $limit = 6): array
    {
        $qb = $this->entityManager->createQueryBuilder()
            ->select('o, u')
            ->from(Order::class, 'o')
            ->join('o.user', 'u')
            ->orderBy('o.id', 'DESC')
            ->setMaxResults($limit);

        $scope->applyOrderScope($qb, 'o');

        /** @var list<Order> */
        return $qb->getQuery()->getResult();
    }
}
