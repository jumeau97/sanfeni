<?php

namespace App\Service\Admin;

use App\Entity\Boutique;
use App\Entity\Order;
use App\Entity\OrderDetails;
use App\Entity\Product;
use App\Entity\User;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

/**
 * Portée ("scope") de l'utilisateur connecté dans le back-office sur mesure.
 *
 * Deux profils coexistent :
 *
 *   · Administrateur / Manager (ROLE_ADMIN ou ROLE_MANAGER)
 *       → voit ET gère TOUTES les données du marketplace.
 *
 *   · Vendeur (tout utilisateur rattaché à une Boutique via User::$shop)
 *       → ne voit ET ne gère QUE les données de SA boutique :
 *           - ses produits,
 *           - ses comptes utilisateurs,
 *           - sa boutique,
 *           - les commandes contenant au moins un de ses articles,
 *             et, dans une commande, uniquement SES lignes.
 *
 * Les données « globales » du catalogue (catégories, transporteurs) sont en
 * lecture seule pour un vendeur : seuls les admins les modifient.
 *
 * Ce service est exposé en Twig via le global `admin_scope`
 * (config/packages/twig.yaml) pour personnaliser l'affichage (menu, badges…).
 */
final class AdminScope
{
    private const SUPER_ROLES = ['ROLE_ADMIN', 'ROLE_MANAGER'];

    public function __construct(private readonly Security $security)
    {
    }

    public function user(): ?User
    {
        $user = $this->security->getUser();

        return $user instanceof User ? $user : null;
    }

    public function isSuperAdmin(): bool
    {
        $user = $this->user();
        if (!$user) {
            return false;
        }

        foreach (self::SUPER_ROLES as $role) {
            if (in_array($role, $user->getRoles(), true)) {
                return true;
            }
        }

        return false;
    }

    public function shop(): ?Boutique
    {
        return $this->user()?->getShop();
    }

    public function isVendor(): bool
    {
        return !$this->isSuperAdmin() && $this->shop() !== null;
    }

    /**
     * Accès au back-office : admin OU propriétaire de boutique.
     */
    public function canAccessAdmin(): bool
    {
        return $this->isSuperAdmin() || $this->shop() !== null;
    }

    public function guard(): void
    {
        if (!$this->canAccessAdmin()) {
            throw new AccessDeniedHttpException(
                "Votre compte n'est pas habilité à accéder au back-office. "
                . 'Rattachlez-le à une boutique ou demandez un rôle administrateur.'
            );
        }
    }

    // ------------------------------------------------------------------
    //  Autorisations « données globales » (catégories, transporteurs…)
    // ------------------------------------------------------------------

    public function canManageGlobalData(): bool
    {
        return $this->isSuperAdmin();
    }

    public function assertCanManageGlobalData(): void
    {
        if (!$this->canManageGlobalData()) {
            throw new AccessDeniedHttpException(
                'Seul un administrateur peut modifier les données globales du catalogue.'
            );
        }
    }

    // ------------------------------------------------------------------
    //  Contrôles d'appartenance, entité par entité
    // ------------------------------------------------------------------

    public function assertProduct(Product $product): void
    {
        if ($this->isSuperAdmin()) {
            return;
        }

        $shop = $this->shop();
        if (!$shop || $product->getShop()?->getId() !== $shop->getId()) {
            throw new AccessDeniedHttpException('Ce produit appartient à une autre boutique.');
        }
    }

    public function assertBoutique(Boutique $boutique): void
    {
        if ($this->isSuperAdmin()) {
            return;
        }

        $shop = $this->shop();
        if (!$shop || $boutique->getId() !== $shop->getId()) {
            throw new AccessDeniedHttpException('Cette boutique ne vous appartient pas.');
        }
    }

    public function assertUser(User $user): void
    {
        if ($this->isSuperAdmin()) {
            return;
        }

        $shop = $this->shop();
        if (!$shop || $user->getShop()?->getId() !== $shop->getId()) {
            throw new AccessDeniedHttpException('Ce compte appartient à une autre boutique.');
        }
    }

    /**
     * Une commande concerne le vendeur si elle contient AU MOINS UN article
     * de sa boutique (order_details.produit.shop).
     */
    public function orderInScope(Order $order): bool
    {
        if ($this->isSuperAdmin()) {
            return true;
        }

        return $this->lineInScope($order);
    }

    public function assertOrder(Order $order): void
    {
        if (!$this->orderInScope($order)) {
            throw new AccessDeniedHttpException(
                'Aucun article de cette commande ne concerne votre boutique.'
            );
        }
    }

    /**
     * Une ligne de commande appartient au vendeur si le produit commandé
     * lui appartient.
     */
    public function lineInScope(Order|OrderDetails $subject): bool
    {
        if ($this->isSuperAdmin()) {
            return true;
        }

        $shop = $this->shop();
        if (!$shop) {
            return false;
        }

        $lines = $subject instanceof Order
            ? $subject->getOrderDetails()->getValues()
            : [$subject];

        foreach ($lines as $line) {
            if ($line->getProduit()?->getShop()?->getId() === $shop->getId()) {
                return true;
            }
        }

        return false;
    }

    /**
     * Lignes visibles par l'utilisateur courant dans une commande :
     * toutes pour l'admin, uniquement les siennes pour le vendeur.
     *
     * @return list<OrderDetails>
     */
    public function visibleLines(Order $order): array
    {
        if ($this->isSuperAdmin()) {
            return $order->getOrderDetails()->getValues();
        }

        $shop = $this->shop();
        if (!$shop) {
            return [];
        }

        $lines = [];
        foreach ($order->getOrderDetails() as $line) {
            if ($line->getProduit()?->getShop()?->getId() === $shop->getId()) {
                $lines[] = $line;
            }
        }

        return $lines;
    }

    /**
     * Somme des lignes visibles par l'utilisateur dans une commande
     * (total « utile » pour le vendeur : ses seuls articles).
     */
    public function scopedTotal(Order $order): float
    {
        $total = 0.0;
        foreach ($this->visibleLines($order) as $line) {
            $total += $line->getPrice() * $line->getQuantity();
        }

        return $total;
    }

    public function assertLineInScope(Order $order, OrderDetails $line): void
    {
        if ($line->getCommande()?->getId() !== $order->getId()) {
            throw new AccessDeniedHttpException('Cette ligne ne appartient pas à la commande.');
        }

        if ($this->isSuperAdmin()) {
            return;
        }

        $shop = $this->shop();
        if (!$shop || $line->getProduit()?->getShop()?->getId() !== $shop->getId()) {
            throw new AccessDeniedHttpException(
                "Cet article n'appartient pas à votre boutique : vous ne pouvez pas le traiter."
            );
        }
    }

    // ------------------------------------------------------------------
    //  Filtres de requête (listes paginées)
    // ------------------------------------------------------------------

    /**
     * Restreint une liste de produits à la boutique du vendeur.
     * L'administrateur n'est pas filtré.
     */
    public function applyProductScope(QueryBuilder $qb, string $alias = 'p'): void
    {
        if ($this->isSuperAdmin()) {
            return;
        }

        $shop = $this->shop();
        if (!$shop) {
            $qb->andWhere('1 = 0');

            return;
        }

        $qb->andWhere(sprintf('%s.shop = :_scopeShop', $alias))
            ->setParameter('_scopeShop', $shop);
    }

    /**
     * Restreint une liste de commandes à celles contenant un article du
     * vendeur (jointure orderDetails → produit → shop, doublons éliminés).
     */
    public function applyOrderScope(QueryBuilder $qb, string $alias = 'o'): void
    {
        if ($this->isSuperAdmin()) {
            return;
        }

        $shop = $this->shop();
        if (!$shop) {
            $qb->andWhere('1 = 0');

            return;
        }

        $qb->distinct()
            ->innerJoin(sprintf('%s.orderDetails', $alias), '_scopeLine')
            ->innerJoin('_scopeLine.produit', '_scopeProduct')
            ->innerJoin('_scopeProduct.shop', '_scopeShopJoin')
            ->andWhere('_scopeShopJoin = :_scopeShopParam')
            ->setParameter('_scopeShopParam', $shop);
    }

    /**
     * Restreint une liste de comptes utilisateurs à l'équipe de la boutique.
     */
    public function applyUserScope(QueryBuilder $qb, string $alias = 'u'): void
    {
        if ($this->isSuperAdmin()) {
            return;
        }

        $shop = $this->shop();
        if (!$shop) {
            $qb->andWhere('1 = 0');

            return;
        }

        $qb->andWhere(sprintf('%s.shop = :_scopeShop', $alias))
            ->setParameter('_scopeShop', $shop);
    }

    /**
     * Restreint une liste de boutiques à celle du vendeur.
     */
    public function applyBoutiqueScope(QueryBuilder $qb, string $alias = 'b'): void
    {
        if ($this->isSuperAdmin()) {
            return;
        }

        $shop = $this->shop();
        if (!$shop) {
            $qb->andWhere('1 = 0');

            return;
        }

        $qb->andWhere(sprintf('%s = :_scopeShop', $alias))
            ->setParameter('_scopeShop', $shop);
    }
}
