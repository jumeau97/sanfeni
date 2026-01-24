<?php

namespace App\Service\Order;

use App\Payload\Utils\UtilisService;
use App\Repository\OrderRepository;
use App\Request\Search\SearchOrder;
use App\Request\Search\SearchProduct;

class OrderImplement implements OrderInterface
{
    public function __construct(
        private UtilisService $utilisService,
        private OrderRepository $orderRepository
    )
    {
    }

    public function findAllByCriteria($pageNumber, $limit, SearchOrder $data)
    {
        return $this->utilisService->ToPaginate($pageNumber, $limit, $this->orderRepository->findAllByCriteria($data, $pageNumber, $limit));
    }
}
