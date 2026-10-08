<?php

namespace App\Tests\Controller\Admin;

use App\Entity\Product;
use App\Entity\ProductAttribute;
use App\Entity\ProductAttributeValue;
use App\Entity\ProductVariation;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Verrouille l'enregistrement des PRODUITS VARIABLES depuis le back-office :
 *
 *  · la page produit expose bien le bloc « déclinaisons » et ses aperçus ;
 *  · une ligne créée « à la volée » (Attribut + Valeur) engendre de vraies
 *    entités ProductAttribute / ProductAttributeValue liées à la variation ;
 *  · un produit déclaré variable SANS déclinaison est refusé ;
 *  · passer un produit variable en « simple » supprime ses déclinaisons.
 *
 * Les fixtures sont créées puis détruites à chaque test : la base de test
 * reste vide après exécution.
 */
final class AdminProductVariationTest extends WebTestCase
{
    private const CREATED_NAME = 'VESTE-CREE-PAR-LE-TEST';
    private const SEED_NAME = 'VESTE-VARIABLE-SEED';

    private KernelBrowser $client;

    private int $adminId = 0;
    private int $attributeId = 0;
    private int $valueId = 0;
    private int $seedProductId = 0;

    protected function setUp(): void
    {
        parent::setUp();

        $this->client = static::createClient();

        $em = $this->em();

        $admin = (new User())
            ->setEmail('admin-variations@test.local')
            ->setRoles(['ROLE_ADMIN'])
            ->setPassword('hash-test');

        // Une valeur d'attribut pré-existante, pour tester la SÉLECTION.
        // (Réutilisation d'un éventuel « Taille » laissé par un test précédent.)
        $attribute = $em->getRepository(ProductAttribute::class)->findOneBy(['name' => 'Taille'])
            ?? (new ProductAttribute())->setName('Taille');
        $value = (new ProductAttributeValue())
            ->setAttribute($attribute)
            ->setValue('M');

        $product = (new Product())
            ->setName(self::SEED_NAME)
            ->setSlug('veste-variable-seed')
            ->setPrice(10000.0)
            ->setIsPromotion(false)
            ->setState('actif')
            ->setType(Product::TYPE_VARIABLE);

        $variation = (new ProductVariation())
            ->setProduct($product)
            ->setStock(3)
            ->addAttribute($value);

        foreach ([$admin, $attribute, $value, $product, $variation] as $entity) {
            $em->persist($entity);
        }
        $em->flush();

        $this->adminId = (int) $admin->getId();
        $this->attributeId = (int) $attribute->getId();
        $this->valueId = (int) $value->getId();
        $this->seedProductId = (int) $product->getId();
    }

    protected function tearDown(): void
    {
        try {
            $em = $this->em();
            $em->clear();

            // Variations puis produits (aucun orphanRemoval côté entité).
            foreach ($em->getRepository(ProductVariation::class)->findAll() as $variation) {
                $em->remove($variation);
            }

            foreach ([self::SEED_NAME, self::CREATED_NAME] as $name) {
                $product = $em->getRepository(Product::class)->findOneBy(['name' => $name]);
                if ($product) {
                    $em->remove($product);
                }
            }
            $em->flush();

            // Attributs / valeurs : réservés aux tests, on repart de zéro.
            foreach ($em->getRepository(ProductAttributeValue::class)->findAll() as $value) {
                $em->remove($value);
            }
            $em->flush();

            foreach ($em->getRepository(ProductAttribute::class)->findAll() as $attribute) {
                $em->remove($attribute);
            }

            $admin = $em->find(User::class, $this->adminId);
            if ($admin) {
                $em->remove($admin);
            }
            $em->flush();
        } finally {
            parent::tearDown();
        }
    }

    // ------------------------------------------------------------------
    //  Rendu du formulaire
    // ------------------------------------------------------------------

    public function testProductFormRendersVariationBlockAndPreviewSlots(): void
    {
        $this->login();

        $crawler = $this->client->request('GET', '/admin/produits/new');

        self::assertSame(200, $this->client->getResponse()->getStatusCode());

        // Bloc déclinaisons + prototype d'ajout dynamique.
        self::assertSame(1, $crawler->filter('[data-admin-variations-field]')->count());
        self::assertStringContainsString(
            'data-admin-variation-item',
            (string) $crawler->filter('#admin-variations')->attr('data-prototype')
        );

        // Emplacements d'aperçu : image principale + galerie.
        self::assertGreaterThanOrEqual(1, $crawler->filter('[data-admin-preview-root]')->count());
        self::assertGreaterThanOrEqual(1, $crawler->filter('[data-admin-preview-slot]')->count());

        $albumPrototype = (string) $crawler->filter('#admin-albums')->attr('data-prototype');
        self::assertStringContainsString('data-admin-preview-root', $albumPrototype);
        self::assertStringContainsString('data-admin-preview-slot', $albumPrototype);
        self::assertStringContainsString('data-admin-remove-album', $albumPrototype);
    }

    // ------------------------------------------------------------------
    //  Enregistrement
    // ------------------------------------------------------------------

    public function testVariableProductSavesVariationsAndCreatesAttributeValues(): void
    {
        $this->login();
        $meta = $this->formMeta('/admin/produits/new');

        $parameters = [
            $meta['name'] => [
                '_token' => $meta['token'],
                'name' => self::CREATED_NAME,
                'slug' => '',
                'description' => 'Veste test',
                'price' => '15000',
                'type' => Product::TYPE_VARIABLE,
                'state' => 'actif',
                'isPromotion' => 0,
                // Ligne 1 : création rapide d'une valeur (Taille : XL).
                // Ligne 2 : sélection d'une valeur déjà en base (Taille : M).
                'productVariations' => [
                    0 => [
                        'newAttribute' => 'Taille',
                        'newValue' => 'XL',
                        'newColor' => '',
                        'price' => '12500',
                        'stock' => '7',
                    ],
                    1 => [
                        'attributes' => [$this->valueId],
                        'newAttribute' => '',
                        'newValue' => '',
                        'newColor' => '',
                        'price' => '',
                        'stock' => '2',
                    ],
                ],
            ],
        ];

        $this->client->request('POST', '/admin/produits/new', $parameters);

        self::assertSame(
            302,
            $this->client->getResponse()->getStatusCode(),
            $this->client->getResponse()->getContent() ?: ''
        );

        $em = $this->em();
        $em->clear();

        /** @var Product $product */
        $product = $em->getRepository(Product::class)->findOneBy(['name' => self::CREATED_NAME]);
        self::assertNotNull($product, 'Le produit variable doit être enregistré.');
        self::assertSame(Product::TYPE_VARIABLE, $product->getType());
        self::assertCount(2, $product->getProductVariations());

        // La nouvelle valeur a été rattachée à l'attribut pré-existant.
        /** @var ProductAttribute $attribute */
        $attribute = $em->find(ProductAttribute::class, $this->attributeId);
        self::assertNotNull($attribute);

        /** @var ProductAttributeValue $created */
        $created = $em->getRepository(ProductAttributeValue::class)
            ->findOneBy(['attribute' => $attribute, 'value' => 'XL']);
        self::assertNotNull($created, 'La valeur « XL » doit être créée.');
        self::assertSame(1, $created->getProductVariations()->count(), 'La valeur « XL » doit être liée à une variation.');

        $stocks = [];
        $prices = [];
        foreach ($product->getProductVariations() as $variation) {
            $stocks[] = $variation->getStock();
            $prices[] = $variation->getPrice();
        }

        sort($stocks);
        self::assertSame([2, 7], $stocks);
        self::assertContains(12500.0, $prices);
        self::assertContains(null, $prices, 'Une ligne sans prix doit retomber sur le prix du produit.');
    }

    public function testVariableProductWithoutAnyVariationIsRefused(): void
    {
        $this->login();
        $meta = $this->formMeta('/admin/produits/new');

        $crawler = $this->client->request('POST', '/admin/produits/new', [
            $meta['name'] => [
                '_token' => $meta['token'],
                'name' => self::CREATED_NAME,
                'price' => '15000',
                'type' => Product::TYPE_VARIABLE,
                'state' => 'actif',
                'isPromotion' => 0,
                // Aucune déclinaison soumise.
            ],
        ]);

        self::assertSame(200, $this->client->getResponse()->getStatusCode());
        self::assertStringContainsString(
            'Ajoutez au moins une déclinaison',
            $crawler->filter('body')->text()
        );

        $em = $this->em();
        $em->clear();
        self::assertNull(
            $em->getRepository(Product::class)->findOneBy(['name' => self::CREATED_NAME]),
            'Un produit variable sans déclinaison ne doit pas être enregistré.'
        );
    }

    public function testNewValueWithoutAttributeNameIsRefused(): void
    {
        $this->login();
        $meta = $this->formMeta('/admin/produits/new');

        $crawler = $this->client->request('POST', '/admin/produits/new', [
            $meta['name'] => [
                '_token' => $meta['token'],
                'name' => self::CREATED_NAME,
                'price' => '15000',
                'type' => Product::TYPE_VARIABLE,
                'state' => 'actif',
                'isPromotion' => 0,
                'productVariations' => [
                    0 => [
                        'newAttribute' => '',
                        'newValue' => 'XL',
                        'newColor' => '',
                        'price' => '',
                        'stock' => '4',
                    ],
                ],
            ],
        ]);

        self::assertSame(200, $this->client->getResponse()->getStatusCode());
        self::assertStringContainsString(
            'Indiquez le nom de l’attribut',
            $crawler->filter('body')->text()
        );

        $em = $this->em();
        $em->clear();
        self::assertNull($em->getRepository(Product::class)->findOneBy(['name' => self::CREATED_NAME]));
    }

    public function testSwitchingVariableProductToSimpleRemovesItsVariations(): void
    {
        $this->login();
        $meta = $this->formMeta('/admin/produits/' . $this->seedProductId . '/edit');

        $this->client->request('POST', '/admin/produits/' . $this->seedProductId . '/edit', [
            $meta['name'] => [
                '_token' => $meta['token'],
                'name' => self::SEED_NAME,
                'slug' => 'veste-variable-seed',
                'price' => '10000',
                'type' => Product::TYPE_SIMPLE,
                'state' => 'actif',
                'isPromotion' => 0,
                'stock' => '12',
                // La variation existante est soumise : c'est bien le TYPE
                // qui doit déclencher sa suppression.
                'productVariations' => [
                    0 => [
                        'attributes' => [$this->valueId],
                        'newAttribute' => '',
                        'newValue' => '',
                        'newColor' => '',
                        'price' => '',
                        'stock' => '3',
                    ],
                ],
            ],
        ]);

        self::assertSame(
            302,
            $this->client->getResponse()->getStatusCode(),
            $this->client->getResponse()->getContent() ?: ''
        );

        $em = $this->em();
        $em->clear();

        /** @var Product $product */
        $product = $em->find(Product::class, $this->seedProductId);
        self::assertNotNull($product);
        self::assertSame(Product::TYPE_SIMPLE, $product->getType());
        self::assertCount(
            0,
            $product->getProductVariations(),
            'Un produit passé en « simple » ne doit plus conserver de déclinaison.'
        );
        self::assertNull(
            $em->getRepository(ProductVariation::class)->findOneBy(['stock' => 3]),
            'La variation supprimée doit avoir été effacée de la base.'
        );
    }

    /* ---------------------------------------------------------------- */

    private function login(): void
    {
        /** @var User $admin */
        $admin = $this->em()->find(User::class, $this->adminId);
        $this->client->loginUser($admin);
    }

    /**
     * Nom du formulaire et jeton CSRF réellement rendus par la page :
     * on ne devine jamais le préfixe (admin_product[...]) à la main.
     *
     * @return array{name: string, token: string}
     */
    private function formMeta(string $uri): array
    {
        $crawler = $this->client->request('GET', $uri);
        self::assertSame(200, $this->client->getResponse()->getStatusCode());

        $inputName = (string) $crawler->filter('input[name$="[name]"]')->attr('name');
        self::assertStringContainsString('[name]', $inputName, 'Champ « nom » introuvable sur ' . $uri);

        $formName = explode('[', $inputName)[0];

        $token = (string) $crawler->filter(sprintf('input[name="%s[_token]"]', $formName))->attr('value');
        self::assertNotSame('', $token, 'Jeton CSRF introuvable sur ' . $uri);

        return ['name' => $formName, 'token' => $token];
    }

    private function em(): EntityManagerInterface
    {
        /** @var EntityManagerInterface $em */
        $em = static::getContainer()->get(EntityManagerInterface::class);

        return $em;
    }
}
