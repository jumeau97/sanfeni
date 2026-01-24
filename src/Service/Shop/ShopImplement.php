<?php

namespace App\Service\Shop;


use App\Payload\Utils\UtilisService;
use App\Repository\BoutiqueRepository;
use App\Request\Search\SearchShop;


class ShopImplement implements ShopInterface
{

    public function __construct(
        private UtilisService $utilisService,
        private BoutiqueRepository $shopRepository,

    )
    {
    }

    public function findAllByCriteria($pageNumber, $limit, SearchShop $data)
    {
        return $this->utilisService->ToPaginate($pageNumber, $limit, $this->shopRepository->findAllByCriteria($data, $pageNumber, $limit));
    }
}
