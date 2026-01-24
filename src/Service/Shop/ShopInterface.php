<?php

namespace App\Service\Shop;


use App\Request\Search\SearchShop;

interface ShopInterface
{
    public function findAllByCriteria($pageNumber, $limit, SearchShop $data);

}
