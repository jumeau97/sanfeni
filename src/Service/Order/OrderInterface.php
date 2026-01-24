<?php

namespace App\Service\Order;

use App\Request\Search\SearchOrder;
use App\Request\Search\SearchProduct;

interface OrderInterface
{
    public function findAllByCriteria($pageNumber, $limit, SearchOrder $data);
}
