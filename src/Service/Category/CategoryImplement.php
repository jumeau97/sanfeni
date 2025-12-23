<?php

namespace App\Service\Category;

use App\Payload\SearchRequest\SearchProduct;
use App\Payload\Utils\UtilisService;
use App\Repository\CategoryRepository;
use App\Repository\ProductRepository;
use App\Request\Search\SearchCategory;
use App\Service\Product\ProductInterface;

class CategoryImplement implements CategoryInterface
{

    public function __construct(
        private UtilisService $utilisService,
        private CategoryRepository $categoryRepository,

    )
    {
    }

    public function findAllByCriteria($pageNumber, $limit, SearchCategory $data)
    {
        return $this->utilisService->ToPaginate($pageNumber, $limit, $this->categoryRepository->findAllByCriteria($data, $pageNumber, $limit));
    }
}
