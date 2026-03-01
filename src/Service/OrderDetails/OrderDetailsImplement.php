<?php

namespace App\Service\OrderDetails;

use App\Payload\Utils\UtilisService;
use App\Repository\OrderDetailsRepository;
use App\Repository\OrderRepository;
use App\Request\Search\SearchOrder;
use App\Request\Search\SearchOrderDetails;
use App\Request\Search\SearchProduct;
use App\Service\Order\OrderInterface;

class OrderDetailsImplement implements OrderDetailsInterface
{
    public function __construct(
        private UtilisService $utilisService,
        private OrderDetailsRepository $orderDetailsRepository
    )
    {
    }

    public function findAllByCriteria($pageNumber, $limit, SearchOrderDetails $data)
    {
        return $this->utilisService->ToPaginate($pageNumber, $limit, $this->orderDetailsRepository->findAllByCriteria($data, $pageNumber, $limit));
    }
}
