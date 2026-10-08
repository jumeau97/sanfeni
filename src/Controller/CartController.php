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

        return $this->renderCart($cart);
    }

    #[Route('panier/remove', name: 'remove_my_cart')]
    public function remove(Cart $cart): Response
    {
        $cart->remove();

        return $this->redirectToRoute('cart');
    }

    #[Route('/panier/delete/{id}', name: 'delete_to_cart')]
    public function delete(Cart $cart, $id): Response
    {
        $cart->delete($id);

        return $this->renderCart($cart);
    }

    #[Route('/panier/decrease/{id}', name: 'decrease_to_cart')]
    public function decrease(Cart $cart, $id): Response
    {
        $cart->decrease($id);

        return $this->renderCart($cart);
    }

    #[Route('/mon-panier', name: 'cart')]
    public function index(Cart $cart): Response
    {
        return $this->renderCart($cart);
    }

    /**
     * Les quatre routes ci-dessus rendent toutes la même page : on centralise
     * la reconstruction du panier complet (le service purge lui-même les
     * produits disparus, ce que ne faisait pas la boucle dupliquée).
     */
    private function renderCart(Cart $cart): Response
    {
        return $this->render('cart/index.html.twig', [
            'cart' => $cart->getFull(),
        ]);
    }
}
