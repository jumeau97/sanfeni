<?php

namespace App\Controller;

use App\Entity\Product;
use App\Form\ProductType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class AdminProductCrudController extends AbstractController
{

    public function __construct(
        private EntityManagerInterface $entityManager
    )
    {
    }

    #[Route('/dashboard/product', name: 'dashboard_product_crud')]
    public function index(): Response
    {
        $products = $this->entityManager->getRepository(Product::class)->findAll();
        return $this->render('admin_product_crud/index.html.twig', [
            'products' => $products,
        ]);
    }

    #[Route('/dashboard/add-new-product', name: 'dashboard_new_product')]
    public function addNewProduct(): Response
    {
        $task = new Product();

        $form = $this->createForm(ProductType::class, $task);
        return $this->render('admin_product_crud/add_new_product.html.twig', [
            'form' => $form
        ]);
    }
}
