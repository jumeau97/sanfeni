<?php

namespace App\Payload;

use App\Entity\User;

class OrderUpdateRequest
{

    public ?int $id = null;


    public ?User $user = null;


    public ?\DateTimeImmutable $createdAt = null;


    public ?string $carrierName = null;


    public ?float $carrierPrice = null;


    public ?string $delivery = null;




    public ?bool $isPaid = null;

    public ?string $state = null;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @param int|null $id
     */
    public function setId(?int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return User|null
     */
    public function getUser(): ?User
    {
        return $this->user;
    }

    /**
     * @param User|null $user
     */
    public function setUser(?User $user): void
    {
        $this->user = $user;
    }

    /**
     * @return \DateTimeImmutable|null
     */
    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    /**
     * @param \DateTimeImmutable|null $createdAt
     */
    public function setCreatedAt(?\DateTimeImmutable $createdAt): void
    {
        $this->createdAt = $createdAt;
    }

    /**
     * @return string|null
     */
    public function getCarrierName(): ?string
    {
        return $this->carrierName;
    }

    /**
     * @param string|null $carrierName
     */
    public function setCarrierName(?string $carrierName): void
    {
        $this->carrierName = $carrierName;
    }

    /**
     * @return float|null
     */
    public function getCarrierPrice(): ?float
    {
        return $this->carrierPrice;
    }

    /**
     * @param float|null $carrierPrice
     */
    public function setCarrierPrice(?float $carrierPrice): void
    {
        $this->carrierPrice = $carrierPrice;
    }

    /**
     * @return string|null
     */
    public function getDelivery(): ?string
    {
        return $this->delivery;
    }

    /**
     * @param string|null $delivery
     */
    public function setDelivery(?string $delivery): void
    {
        $this->delivery = $delivery;
    }


    /**
     * @return bool|null
     */
    public function getIsPaid(): ?bool
    {
        return $this->isPaid;
    }

    /**
     * @param bool|null $isPaid
     */
    public function setIsPaid(?bool $isPaid): void
    {
        $this->isPaid = $isPaid;
    }

    /**
     * @return string|null
     */
    public function getState(): ?string
    {
        return $this->state;
    }

    /**
     * @param string|null $state
     */
    public function setState(?string $state): void
    {
        $this->state = $state;
    }

}
