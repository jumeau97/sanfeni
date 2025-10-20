<?php

namespace App\Model;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;


class Cart
{
    private $requestStack;

    public function __construct(RequestStack $requestStack, private EntityManagerInterface $entityManager)
    {
        $this->requestStack = $requestStack;
    }

    public function add($id)
    {
        $session = $this->requestStack->getSession();
        $cart = $session->get('cart', []);
        if (!empty($cart[$id])) {
            $cart[$id]++;
        } else {
            $cart[$id] = 1;
        }
        $session->set('cart', $cart);
    }

    public function get()
    {
        $session = $this->requestStack->getSession();
        return $session->get('cart');
    }

    public function getFull()
    {
        $cartComplete = [];
        if ($this->get()) {
            foreach ($this->get() as $id => $quantity) {
                $product_object = $this->entityManager->getRepository(Product::class)->findOneBy(['id' => $id]);
                if (!$product_object) {
                    $this->delete($id);
                    continue;
                }
                $cartComplete[] = [
                    'product' => $product_object,
                    'quantity' => $quantity
                ];

            }
        }
        return $cartComplete;
    }

    public function remove()
    {
        $session = $this->requestStack->getSession();
        return $session->remove('cart');
    }

    public function delete($id)
    {
        $session = $this->requestStack->getSession();
        $cart =$session->get('cart', []);
        unset($cart[$id]);
        return $session->set('cart', $cart);
    }

    public function decrease($id)
    {
        $session = $this->requestStack->getSession();
        $cart = $session->get('cart', []);
        if ($cart[$id] > 1) {
            $cart[$id]--;
        } else {
            unset($cart[$id]);
        }
        return $session->set('cart', $cart);
    }

    /**
     * Définit directement la quantité d'un produit dans le panier.
     */
    public function setQuantity($id, $newQuantity)
    {
        $session = $this->requestStack->getSession();
        $cart = $session->get('cart', []);

        $newQuantity = (int) $newQuantity;

        if ($newQuantity > 0) {
            $cart[$id] = $newQuantity;
        } else {
            // Si la quantité est 0 ou moins, supprimez l'article
            unset($cart[$id]);
        }

        return $session->set('cart', $cart);
    }

}
