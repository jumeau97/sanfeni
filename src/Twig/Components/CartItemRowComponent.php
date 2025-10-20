<?php

namespace App\Twig\Components;

use App\Entity\Product;
use App\Model\Cart;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentToolsTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\LiveCollectionTrait;
use Symfony\UX\LiveComponent\LiveResponder;
use Symfony\UX\LiveComponent\ValidatableComponentTrait;

#[AsLiveComponent]
final class CartItemRowComponent
{
    use DefaultActionTrait;
    use ValidatableComponentTrait;

    // Données de la ligne (produit et quantité initiale)
    // L'ID du produit (simple entier, facilement déshydraté)
    #[LiveProp]
    public ?int $productId = null;

    // La quantité affichée (simple entier, facilement déshydraté)
    #[LiveProp(writable: true)]
    public int $quantity = 1;

    private ?Product $product = null;

    public function __construct(
        private Cart $cartService,
        private EntityManagerInterface $entityManager // <-- Injection de l'EntityManager
    )
    {
    }

    // Méthode pour charger l'entité Product une seule fois
    /**
     * Charge l'entité Product. Rendu PUBLIC pour être accessible par Twig (this.productEntity).
     */
    public function getProductEntity(): ?Product // Changé de private à public
    {
        if ($this->product === null && $this->productId !== null) {
            $this->product = $this->entityManager->getRepository(Product::class)->find($this->productId);
        }
        return $this->product;
    }

    // Calcule le prix unitaire final
    public function getFinalUnitPrice(): float
    {
        $product = $this->getProductEntity();
        if (!$product) { return 0.0; }

        $price = $product->getPrice() / 100;

        if ($product->isPromotion()) {
            return $price * (1 - ($product->getOffPercent() / 100));
        }
        return $price;
    }

    // Calcule le total de la ligne
    public function getLineTotal(): float
    {
        return $this->getFinalUnitPrice() * $this->quantity;
    }

    // ... (Les actions increaseQuantity, decreaseQuantity, removeItem restent inchangées) ...

    #[LiveAction]
    public function increaseQuantity(LiveResponder $liveResponder): void
    {
        $this->cartService->add($this->productId);
        $this->quantity++;
        $liveResponder->emitUp('cartUpdated');
    }

    #[LiveAction]
    public function decreaseQuantity(LiveResponder $liveResponder): void
    {
        $this->cartService->decrease($this->productId);

        if ($this->quantity > 1) {
            $this->quantity--;
        } else {
            // Si la quantité passe à zéro, le parent doit recharger pour supprimer la ligne.
        }
//        $this->emitUp('cartUpdated');
        $liveResponder->emitUp('cartUpdated');
    }

    #[LiveAction]
    public function removeItem(LiveResponder $liveResponder): void
    {
        $this->cartService->delete($this->productId);
        $liveResponder->emitUp('cartUpdated');
    }
}
