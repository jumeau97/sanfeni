<?php

namespace App\Twig\Components;

use App\Entity\Product;
use App\Model\Cart;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\LiveResponder;

#[AsLiveComponent]
final class ProductDetails extends AbstractController
{
    use DefaultActionTrait;

    #[LiveProp]
    public Product $product;

    public function __construct(
        private Cart          $cartService,
        private LiveResponder $liveResponder
    )
    {
    }


    #[LiveAction]
    public function addToCart(): Response
    {
//        dd($this->product->getId());
        if ($this->product->getId()) {
            $this->cartService->add($this->product->getId());

            $this->liveResponder->emit('headerCartUpdated', componentName: 'HeaderCartComponent');
            return $this->redirectToRoute('cart');

        }
    }
}
