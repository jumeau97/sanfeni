<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Product;
use App\Model\Cart;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HeaderController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private CategoryRepository $categoryRepository
    )
    {
    }


    public function indexCartPreview(Cart $cart)
    {
//        $categories = $this->entityManager->getRepository(Category::class)->findAll();

        $cartComplete = [];
        if ($cart->get()) {
            foreach ($cart->get() as $id => $quantity) {
                $cartComplete[] = [
                    'product' => $this->entityManager->getrepository(Product::class)->findOneById($id),
                    'quantity' => $quantity,
//                    'categories' => $this->categoryRepository->findCategoryTree()
                ];
            }
        }
//        $cart->remove();
//        dd($cartComplete);


        return $this->render('menus/header.html.twig', [
            'previewCart' => $cartComplete,
            'currentCart' => count($cart->get() ?? []),
            'categories' => $this->categoryRepository->findCategoryTree()
        ]);


    }
}
