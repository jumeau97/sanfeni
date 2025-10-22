<?php

namespace App\Twig\Components;

use App\Model\Cart;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveListener;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentToolsTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\LiveResponder;

#[AsLiveComponent]
final class HeaderCartComponent
{
    use DefaultActionTrait;
//    use ComponentToolsTrait;

    public function __construct(private LiveResponder $liveResponder)
    {
    }


    public array $previewCart = [];
    #[LiveProp]
    public ?int $currentCart = 0;

    #[LiveListener('headerCartUpdated')]
    public function onCartUpdate(Cart $cartService): void
    {
        // 1. Recharge les données fraîches depuis la session (via le service)
        $this->previewCart = $cartService->getFull();

        $this->currentCart = count($cartService->get());
//        $this->dispatchBrowserEvent('modal:open', []);
        $this->liveResponder->dispatchBrowserEvent('modal:open', []);

    }
}
