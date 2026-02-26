<?php

namespace App\Controller;


use App\Form\SearchType;
use App\Model\Cart;
use App\Payload\SearchRequest\SearchActualites;
use App\Payload\Utils\UtilisService;
use App\Request\Search\SearchProduct;
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
        $search = new SearchProduct();
        $form = $this->createForm(SearchType::class, $search);
        $form->handleRequest($request);
//        dd($search);


//        if ($form->isSubmitted() && $form->isValid()) {
            // $form->getData(); == $search
//            $result = $this->productInterface->findAllByCriteria($pageNumb, $limit, $search);
//        } else {
            $result = $this->productInterface->findAllByCriteria($pageNumb, $limit, $search);
//        }


        $jsonData = $this->serializer->serialize($result, 'json', ["groups" => "getProducts"]);
        $dataArray = json_decode($jsonData, true);
        $products = $this->utilisService->paginationResp($dataArray, $result, $limit);
//        dd($this->indexCartPreview($cart));

        return $this->render('home/index.html.twig', [
            'products' => $products,
        ]);
    }


//    #[Route('/product/{slug}', name: 'show-products', methods: ['GET'])]
//    public function show($slug): Response
//    {
//        dd($slug);
//        $product = $this->entityManager->getRepository(Product::class)->findOneBySlug($slug);
//        if (!$product) {
//            return $this->redirectToRoute('app_home');
//        }
//        return $this->render('home/index.html.twig', [
//            'product' => $product,
//        ]);
//    }


}
