<?php

namespace App\Controller;

use App\Entity\Album;
use App\Entity\Category;
use App\Entity\Product;
use App\Payload\Utils\GlobalResponse;
use App\Payload\Utils\UtilisService;
use App\Request\ProductRequest;
use App\Request\Search\SearchCategory;
use App\Request\Search\SearchProduct;
use App\Request\Search\SearchShop;
use App\Service\Product\ProductInterface;
use App\Service\Shop\ShopInterface;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Vich\UploaderBundle\Handler\UploadHandler;

#[Route("dashboard")]
final class BoutiqueController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SerializerInterface    $serializer,
        private ValidatorInterface    $validator,
        private ShopInterface $shopIterface,
        private UtilisService $utilisService,

    )
    {
    }


    #[Route('/find-all-shop', name: 'find-all-shop',  methods: ['POST'])]
    public function findAllByCriteria(Request $request,)
    {
        $pageNumb = $request->query->getInt('page', 1);
        $limit = $request->query->getInt('limit', 50);
        $data = $this->serializer->deserialize($request->getContent(), SearchShop::class, 'json');

        $result = $this->shopIterface->findAllByCriteria($pageNumb, $limit, $data);
        $jsonData = $this->serializer->serialize($result, 'json', ["groups" => "getShop"]);
        $dataArray = json_decode($jsonData, true);
        $array = $this->utilisService->paginationResp($dataArray, $result, $limit);
        return GlobalResponse::successWith("La liste des boutiques", $array);
    }
}
