<?php

namespace App\Request;

use App\Entity\Boutique;


class ProductRequest
{
    public const TYPE_SIMPLE = 'simple';

    private ?string $name = null;

    private ?array $categories=[];

    private ?float $price = null;

    private ?string $description = null;

    private ?string $slug = null;

    private ?string $illustration = null;

    private ?int $shopId = null;

    private ?string $type = self::TYPE_SIMPLE;

    private ?bool $isPromotion = null;

    private ?int $offPercent = null;

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

    /**
     * @return array|null
     */
    public function getCategories(): ?array
    {
        return $this->categories;
    }

    /**
     * @param array|null $categories
     */
    public function setCategories(?array $categories): void
    {
        $this->categories = $categories;
    }

    /**
     * @return float|null
     */
    public function getPrice(): ?float
    {
        return $this->price;
    }

    /**
     * @param float|null $price
     */
    public function setPrice(?float $price): void
    {
        $this->price = $price;
    }

    /**
     * @return string|null
     */
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * @param string|null $description
     */
    public function setDescription(?string $description): void
    {
        $this->description = $description;
    }

    /**
     * @return string|null
     */
    public function getSlug(): ?string
    {
        return $this->slug;
    }

    /**
     * @param string|null $slug
     */
    public function setSlug(?string $slug): void
    {
        $this->slug = $slug;
    }

    /**
     * @return string|null
     */
    public function getIllustration(): ?string
    {
        return $this->illustration;
    }

    /**
     * @param string|null $illustration
     */
    public function setIllustration(?string $illustration): void
    {
        $this->illustration = $illustration;
    }

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
    public function getType(): ?string
    {
        return $this->type;
    }

    /**
     * @param string|null $type
     */
    public function setType(?string $type): void
    {
        $this->type = $type;
    }

    /**
     * @return bool|null
     */
    public function getIsPromotion(): ?bool
    {
        return $this->isPromotion;
    }

    /**
     * @param bool|null $isPromotion
     */
    public function setIsPromotion(?bool $isPromotion): void
    {
        $this->isPromotion = $isPromotion;
    }

    /**
     * @return int|null
     */
    public function getOffPercent(): ?int
    {
        return $this->offPercent;
    }

    /**
     * @param int|null $offPercent
     */
    public function setOffPercent(?int $offPercent): void
    {
        $this->offPercent = $offPercent;
    }




}
