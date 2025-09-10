<?php

namespace App\Service\Product;


use App\Payload\SearchRequest\SearchProduct;

interface ProductInterface
{
    public function findAllByCriteria($pageNumber, $limit, SearchProduct $data);

}
