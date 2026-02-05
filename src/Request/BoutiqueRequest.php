<?php

namespace App\Request;


class BoutiqueRequest
{

    private ?int $id = null;

    private ?string $name = null;

    private ?string $proprietaire = null;

    private ?string $phoneNumber = null;

    private ?string $propPhoneNumber = null;

    private ?string $description = null;

    private ?string $email = null;

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
     * @return string|null
     */
    public function getProprietaire(): ?string
    {
        return $this->proprietaire;
    }

    /**
     * @param string|null $proprietaire
     */
    public function setProprietaire(?string $proprietaire): void
    {
        $this->proprietaire = $proprietaire;
    }

    /**
     * @return string|null
     */
    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    /**
     * @param string|null $phoneNumber
     */
    public function setPhoneNumber(?string $phoneNumber): void
    {
        $this->phoneNumber = $phoneNumber;
    }

    /**
     * @return string|null
     */
    public function getPropPhoneNumber(): ?string
    {
        return $this->propPhoneNumber;
    }

    /**
     * @param string|null $propPhoneNumber
     */
    public function setPropPhoneNumber(?string $propPhoneNumber): void
    {
        $this->propPhoneNumber = $propPhoneNumber;
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


}
