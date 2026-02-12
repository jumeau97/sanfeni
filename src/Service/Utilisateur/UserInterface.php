<?php

namespace App\Service\Utilisateur;


use App\Payload\SearchRequest\SearchProduct;
use App\Request\Search\SearchCategory;
use App\Request\Search\SearchUser;

interface UserInterface
{
    public function findAllByCriteria($pageNumber, $limit, SearchUser $data);

}
