<?php

namespace App\Service\Utilisateur;

use App\Payload\SearchRequest\SearchProduct;
use App\Payload\Utils\UtilisService;
use App\Repository\CategoryRepository;
use App\Repository\ProductRepository;
use App\Repository\UserRepository;
use App\Request\Search\SearchCategory;
use App\Request\Search\SearchUser;
use App\Service\Category\CategoryInterface;
use App\Service\Product\ProductInterface;

class UserImplement implements UserInterface
{

    public function __construct(
        private UtilisService $utilisService,
        private UserRepository $userRepository

    )
    {
    }

    public function findAllByCriteria($pageNumber, $limit, SearchUser $data)
    {
        return $this->utilisService->ToPaginate($pageNumber, $limit, $this->userRepository->findAllByCriteria($data, $pageNumber, $limit));
    }
}
