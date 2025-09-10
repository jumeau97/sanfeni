<?php

namespace App\Controller;

use App\Entity\Product;
use App\Model\Cart;
use App\Payload\SearchRequest\SearchActualites;
use App\Payload\SearchRequest\SearchProduct;
use App\Payload\Utils\UtilisService;
use App\Service\Product\ProductInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

final class HomeController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private ProductInterface       $productInterface,
        private SerializerInterface    $serializer,
        private UtilisService          $utilisService,
    )
    {
    }

    #[Route('/', name: 'app_home')]
    public function index(Request $request, Cart $cart): Response
    {

        $pageNumb = $request->query->getInt('page', 1);
        $limit = $request->query->getInt('limit', 50);
        $data = new SearchProduct();


        $result = $this->productInterface->findAllByCriteria($pageNumb, $limit, $data);
        $jsonData = $this->serializer->serialize($result, 'json', ["groups" => "getProducts"]);
        $dataArray = json_decode($jsonData, true);
        $products = $this->utilisService->paginationResp($dataArray, $result, $limit);
//        dd($this->indexCartPreview($cart));


        return $this->render('home/index.html.twig', [
            'products' => $products,
        ]);
    }



}
