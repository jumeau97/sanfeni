<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Product;
use App\Form\SearchType;
use App\Model\Cart;
use App\Repository\CategoryRepository;
use App\Request\Search\SearchProduct;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HeaderController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private CategoryRepository     $categoryRepository
    )
    {
    }


    public function indexCartPreview(Request $request, Cart $cart)
    {
        $search = new SearchProduct();
        $form = $this->createForm(SearchType::class, $search);

//        $form->handleRequest($request);

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
            'form' => $form,
            'previewCart' => $cartComplete,
            'currentCart' => count($cart->get() ?? []),
            'categories' => $this->categoryRepository->findCategoryTree(),
        ]);


    }
}
