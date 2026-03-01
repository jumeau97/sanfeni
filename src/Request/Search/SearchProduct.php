<?php

namespace App\Request\Search;

class SearchProduct
{

    public ?string $name=null;
    public ?int $shopId=0;

    /**
     * @return int|null
     */
    public function getShopId(): ?int
    {
        return $this->shopId;
    }

    /**
     * @param int|null $shopId
     */
    public function setShopId(?int $shopId): void
    {
        $this->shopId = $shopId;
    }



    /**
     * @return string|null
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string|null $name
     */
    public function setName(?string $name): void
    {
        $this->name = $name;
    }

}
