<?php

namespace App\Tests\Component;

use App\Entity\Product;
use App\Entity\ProductAttribute;
use App\Entity\ProductAttributeValue;
use App\Entity\ProductVariation;
use App\Twig\Components\ProductDetails;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Test\InteractsWithLiveComponents;
use Symfony\UX\LiveComponent\Test\TestLiveComponent;

/**
 * La fiche produit est un LiveComponent : le bouton « Ajouter au panier »
 * déclenche l'action `addToCart` via data-action="live#action".
 *
 * RÉGRESSION VISÉE
 * ----------------
 * Sans l'attribut #[LiveAction], la fiche s'affiche parfaitement, mais le
 * clic échoue côté JavaScript avec :
 *
 *   The action "addToCart" either doesn't exist or is not allowed in
 *   "App\Twig\Components\ProductDetails".
 *
 * Le premier test verrouille ce point sans même toucher à la base.
 * Les suivants vérifient que les garde-fous SERVEUR tiennent : un client
 * qui contourne le bouton désactivé ne doit jamais pouvoir commander une
 * combinaison en rupture.
 *
 * Données : autonomes (créées et purgées ici), donc aucun prérequis —
 * pas besoin d'exécuter `app:demo:variants` pour lancer la suite.
 */
final class ProductDetailsTest extends KernelTestCase
{
    use InteractsWithLiveComponents;

    /** Toutes les données fabriquées ici partagent ce préfixe. */
    private const SLUG_PREFIX = '_livetest_';

    private EntityManagerInterface $em;

    protected function setUp(): void
    {
        self::bootKernel();
        $this->em = self::getContainer()->get('doctrine')->getManager();
        $this->purgeFixtures();
    }

    protected function tearDown(): void
    {
        $this->purgeFixtures();
        parent::tearDown();
    }

    /* ============================================================
       1. RÉGRESSION — l'action doit être exposée au client
       ============================================================ */

    public function testAddToCartIsExposedAsALiveAction(): void
    {
        // C'est exactement le contrôle qui rejetait le clic utilisateur :
        // sans #[LiveAction] sur la méthode, isActionAllowed() renvoie false
        // et le bouton explose en JS.
        self::assertTrue(
            AsLiveComponent::isActionAllowed(ProductDetails::class, 'addToCart'),
            'addToCart doit porter l\'attribut #[LiveAction] pour être appelable depuis la fiche.'
        );

        // Sans ce second contrôle, le premier pourrait passer pour rien.
        self::assertFalse(
            AsLiveComponent::isActionAllowed(ProductDetails::class, 'actionQuiNExistePas')
        );
    }

    /* ============================================================
       2. GARDE-FOUS SERVEUR
       ============================================================ */

    public function testSimpleProductInStockIsAddedToCart(): void
    {
        $component = $this->componentFor($this->createProduct('en_stock', 3));

        $component->call('addToCart', ['quantity' => 1]);

        self::assertTrue(
            $component->response()->isRedirection(),
            'Un produit simple en stock doit être ajouté puis redirigé vers le panier.'
        );
    }

    public function testProductWithZeroStockIsRejected(): void
    {
        $component = $this->componentFor($this->createProduct('rupture', 0));

        $component->call('addToCart', ['quantity' => 1]);

        self::assertFalse(
            $component->response()->isRedirection(),
            'Un produit à stock 0 doit être refusé, même si le client force la requête.'
        );
    }

    public function testVariableProductRequiresASelectedVariation(): void
    {
        $product = $this->createProduct('variable_sans_choix', null);
        $this->addSizeVariations($product);

        $component = $this->componentFor($product);

        // Aucun variationId transmis.
        $component->call('addToCart', ['quantity' => 1]);

        self::assertFalse(
            $component->response()->isRedirection(),
            'Un produit variable doit être refusé tant qu\'aucune combinaison n\'est transmise.'
        );
    }

    public function testVariableProductWithAValidVariationIsAddedToCart(): void
    {
        $product = $this->createProduct('variable_valide', null);
        $variation = $this->addSizeVariations($product);

        $component = $this->componentFor($product);

        $component->call('addToCart', [
            'quantity'    => 2,
            'variationId' => $variation->getId(),
        ]);

        self::assertTrue(
            $component->response()->isRedirection(),
            'Une combinaison en stock doit être acceptée avec sa variante.'
        );
    }

    public function testVariableProductCannotUseAnOutOfStockVariation(): void
    {
        $product = $this->createProduct('variable_epuisee', null);
        $outOfStock = $this->addSizeVariations($product, outOfStockOnly: true);

        $component = $this->componentFor($product);

        $component->call('addToCart', [
            'quantity'    => 1,
            'variationId' => $outOfStock->getId(),
        ]);

        self::assertFalse(
            $component->response()->isRedirection(),
            'Une combinaison à stock 0 doit être refusée côté serveur.'
        );
    }

    /* ============================================================
       FIXTURES
       ============================================================ */

    private function componentFor(Product $product): TestLiveComponent
    {
        // $data alimente ComponentFactory::create() côté serveur : on y passe
        // l'entité telle quelle. La sérialisation en id n'intervient qu'après,
        // lors de l'hydratation depuis le client.
        return $this->createLiveComponent('ProductDetails', ['product' => $product]);
    }

    private function createProduct(string $suffix, ?int $stock): Product
    {
        $product = new Product();
        $product->setName('Produit '.$suffix);
        $product->setSlug(self::SLUG_PREFIX.$suffix);
        // createdAt est renseigné par le callback #[ORM\PrePersist] de l'entité.
        $product->setIsPromotion(false);
        $product->setPrice(1000);
        $product->setStock($stock);

        $this->em->persist($product);
        $this->em->flush();

        return $product;
    }

    /**
     * Attribut « Taille » avec S (stock 5) et M (stock 0).
     *
     * @return ProductVariation la variation demandée, selon $outOfStockOnly
     */
    private function addSizeVariations(Product $product, bool $outOfStockOnly = false): ProductVariation
    {
        $attribute = $this->em->getRepository(ProductAttribute::class)
            ->findOneBy(['name' => 'Taille']);

        if (!$attribute) {
            $attribute = new ProductAttribute();
            $attribute->setName('Taille');
            $this->em->persist($attribute);
            $this->em->flush();
        }

        $target = null;

        foreach (['S' => 5, 'M' => 0] as $label => $stock) {
            $value = $this->em->getRepository(ProductAttributeValue::class)
                ->findOneBy(['attribute' => $attribute, 'value' => $label]);

            if (!$value) {
                $value = new ProductAttributeValue();
                $value->setAttribute($attribute);
                $value->setValue($label);
                $this->em->persist($value);
                $this->em->flush();
            }

            $variation = new ProductVariation();
            $variation->setProduct($product);
            $variation->setStock($stock);
            $variation->addAttribute($value);
            $this->em->persist($variation);
            $this->em->flush();

            // La variation « en rupture » n'est retournée que si on la réclame,
            // sinon on renvoie celle qui est disponible.
            if ($outOfStockOnly ? 0 === $stock : $stock > 0) {
                $target ??= $variation;
            }
        }

        $product->setType(Product::TYPE_VARIABLE);
        $this->em->flush();

        self::assertNotNull($target, 'Aucune variation pertinente créée.');

        return $target;
    }

    /**
     * Supprime les produits fabriqués par ces tests.
     *
     * Il n'y a pas de cascade de suppression de Product vers ProductVariation :
     * les variations doivent partir sinon la clé étrangère bloque.
     */
    private function purgeFixtures(): void
    {
        $products = $this->em->getRepository(Product::class)
            ->createQueryBuilder('p')
            ->where('p.slug LIKE :slug')
            ->setParameter('slug', self::SLUG_PREFIX.'%')
            ->getQuery()
            ->getResult();

        foreach ($products as $product) {
            foreach ($product->getProductVariations()->toArray() as $variation) {
                $product->removeProductVariation($variation);
                $this->em->remove($variation);
            }

            $this->em->remove($product);
        }

        $this->em->flush();
    }
}
