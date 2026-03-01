<?php

namespace App\Request\Search;

class SearchOrderDetails
{
    public ?int $orderId = 0;

    public ?int $shopId = 0;

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
     * @return int|null
     */
    public function getOrderId(): ?int
    {
        return $this->orderId;
    }

    /**
     * @param int|null $orderId
     */
    public function setOrderId(?int $orderId): void
    {
        $this->orderId = $orderId;
    }


}
