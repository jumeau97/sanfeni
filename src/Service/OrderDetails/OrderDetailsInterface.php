<?php

namespace App\Service\OrderDetails;

use App\Request\Search\SearchOrder;
use App\Request\Search\SearchOrderDetails;
use App\Request\Search\SearchProduct;

interface OrderDetailsInterface
{
    public function findAllByCriteria($pageNumber, $limit, SearchOrderDetails $data);
}
