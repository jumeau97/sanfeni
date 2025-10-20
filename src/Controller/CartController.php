<?php

namespace App\Controller;


use App\Entity\Product;
use App\Model\Cart;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class CartController extends AbstractController
{

    public function __construct(
        private EntityManagerInterface $entityManager
    )
    {
    }

    #[Route('/panier/add/{id}', name: 'add_to_cart')]
    public function add(Cart $cart, $id, Request $request): Response
    {
        $cart->add($id);
        $cartConplete = [];
        if ($cart->get()) {
            foreach ($cart->get() as $id => $quantity) {
                $cartConplete[] = [
                    'product' => $this -> entityManager->getrepository(Product::class)->findOneById($id),
                    'quantity' => $quantity,
                ];
            }
        }
        return $this->render('cart/index.html.twig', [
            'cart' =>$cartConplete
        ]);
    }

    #[Route('panier/remove', name: 'remove_my_cart')]
    public function remove(Cart $cart): Response
    {
        $cart->remove();
        return $this->redirectToRoute('products');

    }

    #[Route('/panier/delete/{id}', name: 'delete_to_cart')]
    public function delete(Cart $cart, $id): Response
    {
        $cart ->delete($id);
        $cartConplete = [];
        if ($cart->get()) {
            foreach ($cart->get() as $id => $quantity) {
                $cartConplete[] = [
                    'product' => $this -> entityManager->getrepository(Product::class)->findOneById($id),
                    'quantity' => $quantity,
                ];
            }
        }
//        return $this->redirectToRoute('cart');
        return $this->render('cart/index.html.twig', [
            'cart' =>$cartConplete
        ]);
    }

    #[Route('/panier/decrease/{id}', name: 'decrease_to_cart')]
    public function decrease(Cart $cart, $id): Response
    {
        $cart ->decrease($id);
        $cartConplete = [];
        if ($cart->get()) {
            foreach ($cart->get() as $id => $quantity) {
                $cartConplete[] = [
                    'product' => $this -> entityManager->getrepository(Product::class)->findOneById($id),
                    'quantity' => $quantity,
                ];
            }
        }
//        return $this->redirectToRoute('cart');
        return $this->render('cart/index.html.twig', [
            'cart' =>$cartConplete
        ]);
    }

    #[Route('/mon-panier', name: 'cart')]
    public function index(Cart $cart): Response
    {
//        $cartConplete = [];
//        if ($cart->get()) {
//            foreach ($cart->get() as $id => $quantity) {
//                $cartConplete[] = [
//                    'product' => $this -> entityManager->getrepository(Product::class)->findOneById($id),
//                    'quantity' => $quantity,
//                ];
//            }
//        }



        $cartConplete = $cart->getFull();
//        dd($cartConplete);

        return $this->render('cart/index.html.twig', [
            'cart' =>$cartConplete
        ]);
    }
}
