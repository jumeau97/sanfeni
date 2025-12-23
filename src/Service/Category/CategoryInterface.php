<?php

namespace App\Service\Category;


use App\Payload\SearchRequest\SearchProduct;
use App\Request\Search\SearchCategory;

interface CategoryInterface
{
    public function findAllByCriteria($pageNumber, $limit, SearchCategory $data);

}
