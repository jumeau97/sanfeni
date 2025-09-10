<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Product;
use App\Model\Cart;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HeaderController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager
    )
    {
    }


    public function indexCartPreview(Cart $cart)
    {
        $categories = $this->entityManager->getRepository(Category::class)->findAll();

        $cartComplete = [];
        if ($cart->get()) {
            foreach ($cart->get() as $id => $quantity) {
                $cartComplete[] = [
                    'product' => $this->entityManager->getrepository(Product::class)->findOneById($id),
                    'quantity' => $quantity,
                ];
            }
        }
        return $this->render('menus/header.html.twig', [
            'previewCart' => $cartComplete,
            'currentCart' => $cart->get() ?? [],
            'categories' => $categories
        ]);


    }
}
