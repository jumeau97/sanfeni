<?php

namespace App\Service\Product;


use App\Payload\Utils\UtilisService;
use App\Repository\ProductRepository;
use App\Request\Search\SearchProduct;

class ProductImplement implements ProductInterface
{

    public function __construct(
        private UtilisService $utilisService,
        private ProductRepository $productRepository,

    )
    {
    }

    public function findAllByCriteria($pageNumber, $limit, SearchProduct $data)
    {
        return $this->utilisService->ToPaginate($pageNumber, $limit, $this->productRepository->findAllByCriteria($data, $pageNumber, $limit));
    }
}
