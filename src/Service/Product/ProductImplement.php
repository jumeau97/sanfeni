<?php

namespace App\Service\Product;

use App\Payload\SearchRequest\SearchProduct;
use App\Payload\Utils\UtilisService;
use App\Repository\ProductRepository;

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
