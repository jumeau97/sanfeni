<?php

namespace App\Entity;

use App\Repository\ProductAttributeValueRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductAttributeValueRepository::class)]
class ProductAttributeValue
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'productAttributeValues')]
    private ?ProductAttribute $attribute = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $value = null;

    /**
     * Code couleur (#RRGGBB) pour rendre une pastille visuelle.
     * Renseigné seulement pour les attributs de type couleur ; pour les
     * tailles on affiche le texte brut.
     */
    #[ORM\Column(length: 20, nullable: true)]
    private ?string $color = null;

    /**
     * @var Collection<int, ProductVariation>
     */
    #[ORM\ManyToMany(targetEntity: ProductVariation::class, mappedBy: 'attributes')]
    private Collection $productVariations;

    public function __construct()
    {
        $this->productVariations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAttribute(): ?ProductAttribute
    {
        return $this->attribute;
    }

    public function setAttribute(?ProductAttribute $attribute): static
    {
        $this->attribute = $attribute;

        return $this;
    }

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(?string $value): static
    {
        $this->value = $value;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(?string $color): static
    {
        $this->color = $color;

        return $this;
    }

    /**
     * @return Collection<int, ProductVariation>
     */
    public function getProductVariations(): Collection
    {
        return $this->productVariations;
    }

    public function addProductVariation(ProductVariation $productVariation): static
    {
        if (!$this->productVariations->contains($productVariation)) {
            $this->productVariations->add($productVariation);
            $productVariation->addAttribute($this);
        }

        return $this;
    }

    public function removeProductVariation(ProductVariation $productVariation): static
    {
        if ($this->productVariations->removeElement($productVariation)) {
            $productVariation->removeAttribute($this);
        }

        return $this;
    }
}
