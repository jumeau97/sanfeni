<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Attribute\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[Vich\Uploadable]
class Product
{

    public const TYPE_SIMPLE = 'simple';
    public const TYPE_VARIABLE = 'variable';
    public const TYPE_GROUPED = 'grouped';


    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['getProducts'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['getProducts'])]
    private ?string $name = null;

    /**
     * @var Collection<int, Category>
     */
    #[ORM\ManyToMany(targetEntity: Category::class, inversedBy: 'products')]
    private Collection $categories;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['getProducts'])]
    private ?float $price = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['getProducts'])]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    #[Groups(['getProducts'])]
    private ?string $slug = null;

    #[Vich\UploadableField(mapping: 'products', fileNameProperty: 'illustration', size: 'imageSize')]
    private ?File $imageFile = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['getProducts'])]
    private ?string $illustration = null;

    #[ORM\Column(nullable: true)]
    private ?int $imageSize = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    /**
     * @var Collection<int, Album>
     */
    #[ORM\OneToMany(targetEntity: Album::class, mappedBy: 'product', cascade: ['persist'])]
    #[Groups(['getProducts'])]
    private Collection $albums;

    #[ORM\ManyToOne(inversedBy: 'products')]
    private ?Boutique $shop = null;

    /**
     * @var Collection<int, ProductVariation>
     */
    #[ORM\OneToMany(targetEntity: ProductVariation::class, mappedBy: 'product')]
    private Collection $productVariations;

    #[ORM\Column(length: 255)]
    private ?string $type = self::TYPE_SIMPLE;

    #[ORM\Column]
    #[Groups(['getProducts'])]
    private ?bool $isPromotion = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['getProducts'])]
    private ?int $offPercent = null;

    /**
     * @var Collection<int, OrderDetails>
     */
    #[ORM\OneToMany(targetEntity: OrderDetails::class, mappedBy: 'produit')]
    private Collection $orderDetails;

    public function __construct()
    {
        $this->categories = new ArrayCollection();
        $this->albums = new ArrayCollection();
        $this->productVariations = new ArrayCollection();
        $this->orderDetails = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Category>
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Category $category): static
    {
        if (!$this->categories->contains($category)) {
            $this->categories->add($category);
        }

        return $this;
    }

    public function removeCategory(Category $category): static
    {
        $this->categories->removeElement($category);

        return $this;
    }

    #[ORM\PrePersist]
    public function onCreate(): void
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile|null $imageFile
     */
    public function setImageFile(?File $imageFile = null): void
    {
        $this->imageFile = $imageFile;

        if (null !== $imageFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setIllustration(?string $illustration): void
    {
        $this->illustration = $illustration;
    }

    public function getIllustration(): ?string
    {
        return $this->illustration;
    }

    public function setImageSize(?int $imageSize): void
    {
        $this->imageSize = $imageSize;
    }

    public function getImageSize(): ?int
    {
        return $this->imageSize;
    }

    /**
     * @return Collection<int, Album>
     */
    public function getAlbums(): Collection
    {
        return $this->albums;
    }

    public function addAlbum(Album $album): static
    {
        if (!$this->albums->contains($album)) {
            $this->albums->add($album);
            $album->setProduct($this);
        }

        return $this;
    }

    public function removeAlbum(Album $album): static
    {
        if ($this->albums->removeElement($album)) {
            // set the owning side to null (unless already changed)
            if ($album->getProduct() === $this) {
                $album->setProduct(null);
            }
        }

        return $this;
    }

    public function getShop(): ?Boutique
    {
        return $this->shop;
    }

    public function setShop(?Boutique $shop): static
    {
        $this->shop = $shop;

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
            $productVariation->setProduct($this);
        }

        return $this;
    }

    public function removeProductVariation(ProductVariation $productVariation): static
    {
        if ($this->productVariations->removeElement($productVariation)) {
            // set the owning side to null (unless already changed)
            if ($productVariation->getProduct() === $this) {
                $productVariation->setProduct(null);
            }
        }

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function isPromotion(): ?bool
    {
        return $this->isPromotion;
    }

    public function setIsPromotion(bool $isPromotion): static
    {
        $this->isPromotion = $isPromotion;

        return $this;
    }

    public function getOffPercent(): ?int
    {
        return $this->offPercent;
    }

    public function setOffPercent(int $offPercent): static
    {
        $this->offPercent = $offPercent;

        return $this;
    }

    public function getPromoPrice(): ?int
    {
        if ($this->offPercent) {
            return ($this->price - ($this->price * $this->offPercent) / 100);
        }
        return 0;
    }

    /**
     * @return Collection<int, OrderDetails>
     */
    public function getOrderDetails(): Collection
    {
        return $this->orderDetails;
    }

    public function addOrderDetail(OrderDetails $orderDetail): static
    {
        if (!$this->orderDetails->contains($orderDetail)) {
            $this->orderDetails->add($orderDetail);
            $orderDetail->setProduit($this);
        }

        return $this;
    }

    public function removeOrderDetail(OrderDetails $orderDetail): static
    {
        if ($this->orderDetails->removeElement($orderDetail)) {
            // set the owning side to null (unless already changed)
            if ($orderDetail->getProduit() === $this) {
                $orderDetail->setProduit(null);
            }
        }

        return $this;
    }


}
