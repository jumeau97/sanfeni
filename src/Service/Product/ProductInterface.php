<?php

namespace App\Service\Product;




use App\Request\Search\SearchProduct;

interface ProductInterface
{
    public function findAllByCriteria($pageNumber, $limit, SearchProduct $data);

}
