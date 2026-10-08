<?php

namespace App\Entity;

use App\Repository\ProductVariationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductVariationRepository::class)]
class ProductVariation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'productVariations')]
    private ?Product $product = null;

    /**
     * @var Collection<int, ProductAttributeValue>
     */
    #[ORM\ManyToMany(targetEntity: ProductAttributeValue::class, inversedBy: 'productVariations')]
    private Collection $attributes;

    #[ORM\Column(nullable: true)]
    private ?float $price = null;

    /**
     * Stock de cette combinaison d'attributs. 0 = rupture, ce qui permet
     * au front d'indiquer la taille/couleur indisponible.
     */
    #[ORM\Column]
    private int $stock = 0;

    public function __construct()
    {
        $this->attributes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): static
    {
        $this->product = $product;

        return $this;
    }

    /**
     * @return Collection<int, ProductAttributeValue>
     */
    public function getAttributes(): Collection
    {
        return $this->attributes;
    }

    public function addAttribute(ProductAttributeValue $attribute): static
    {
        if (!$this->attributes->contains($attribute)) {
            $this->attributes->add($attribute);
        }

        return $this;
    }

    public function removeAttribute(ProductAttributeValue $attribute): static
    {
        $this->attributes->removeElement($attribute);

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(?float $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getStock(): int
    {
        return $this->stock;
    }

    public function setStock(int $stock): static
    {
        $this->stock = $stock;

        return $this;
    }
}
