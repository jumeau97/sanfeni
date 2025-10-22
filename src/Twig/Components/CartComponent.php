<?php

namespace App\Twig\Components;

use App\Model\Cart;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveListener;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;


#[AsLiveComponent]
final class CartComponent
{
    use DefaultActionTrait;

    // Initialisé avec les données complètes du panier depuis le contrôleur

    public array $cartItems = [];

    // Pour forcer le rafraîchissement en cas de besoin
    #[LiveProp(writable: true)]
    public int $refreshCounter = 0;

    public function __construct(private Cart $cartService)
    {

    }

    // Écoute les événements 'cartUpdated' envoyés par les enfants
    #[LiveListener('cartUpdated')]
    public function onCartUpdate(): void
    {
        // 1. Recharge les données fraîches depuis la session (via le service)
        $this->cartItems = $this->cartService->getFull();

        // 2. Incrémente le compteur pour garantir que le composant se rafraîchit
        $this->refreshCounter++;

    }


    // Calcule le total général (s'exécute à chaque rafraîchissement)
    public function getGrandTotal(): float
    {
        $total = 0.0;
        foreach ($this->cartItems as $item) {
            $product = $item['product'];
            $quantity = $item['quantity'];

            $price = $product->getPrice() / 100;
            if ($product->isPromotion()) {
                $price = $price * (1 - ($product->getOffPercent() / 100));
            }
            $total += $price * $quantity;
        }
        return $total;
    }
}
