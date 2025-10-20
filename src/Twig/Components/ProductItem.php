<?php

namespace App\Twig\Components;

use App\Entity\Product;
use App\Model\Cart;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\LiveResponder;

#[AsLiveComponent]
final class ProductItem
{
    use DefaultActionTrait;

    // L'entité Product est passée à la prop
    // Contrairement au panier, il n'y a pas d'hydratation après un POST ici, donc on peut passer l'objet directement.
    #[LiveProp]
    public array $product = [];

    public function __construct(
        private Cart          $cartService,
        private LiveResponder $liveResponder
    )
    {
    }

    /**
     * Ajoute le produit au panier et notifie le composant panier
     */
    #[LiveAction]
    public function addToCart(): void
    {
//        dd($this->product['id']);
//        if ($this->product->getValues()) {
        $this->cartService->add($this->product['id']);
        $this->liveResponder->emit('headerCartUpdated', componentName: 'HeaderCartComponent');

//        }
    }

    // Méthodes pour calculer le prix promo, etc., peuvent être ajoutées ici
    public function getFinalPrice(): float
    {
        $price = $this->product->getPrice() / 100;

        if ($this->product->isPromotion()) {
            return $price * (1 - ($this->product->getOffPercent() / 100));
        }
        return $price;
    }
}
