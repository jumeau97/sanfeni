<?php

namespace App\Request;


use App\Entity\Boutique;
use Symfony\Component\Serializer\Attribute\Groups;

class UserRequest
{
    private ?string $email = null;

    private array $roles = [];

    private ?int $shop = null;

    private ?string $lastName = null;

    private ?string $firstName = null;

    /**
     * @return string|null
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * @param string|null $email
     */
    public function setEmail(?string $email): void
    {
        $this->email = $email;
    }

    /**
     * @return array
     */
    public function getRoles(): array
    {
        return $this->roles;
    }

    /**
     * @param array $roles
     */
    public function setRoles(array $roles): void
    {
        $this->roles = $roles;
    }

    /**
     * @return int|null
     */
    public function getShop(): ?int
    {
        return $this->shop;
    }

    /**
     * @param int|null $shop
     */
    public function setShop(?int $shop): void
    {
        $this->shop = $shop;
    }


    /**
     * @return string|null
     */
    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    /**
     * @param string|null $lastName
     */
    public function setLastName(?string $lastName): void
    {
        $this->lastName = $lastName;
    }

    /**
     * @return string|null
     */
    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    /**
     * @param string|null $firstName
     */
    public function setFirstName(?string $firstName): void
    {
        $this->firstName = $firstName;
    }



}
