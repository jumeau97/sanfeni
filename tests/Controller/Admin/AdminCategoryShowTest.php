<?php

namespace App\Tests\Controller\Admin;

use App\Entity\Category;
use App\Entity\Product;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Verrouille la FICHE DÉTAIL d'une catégorie dans le back-office.
 *
 * Régression couverte : la requête listait les produits rattachés avec
 * « p.categories = :category » — Doctrine refuse la comparaison « = » sur
 * une association ManyToMany (« Invalid PathExpression ») et la page
 * tombait en 500. La bonne écriture est « :category MEMBER OF p.categories ».
 *
 * Le même défaut existait sur le filtre « catégorie » de la liste produits.
 *
 * Les fixtures sont créées puis détruites à chaque test : la base de test
 * reste vide après exécution.
 */
final class AdminCategoryShowTest extends WebTestCase
{
    private const CATEGORY_NAME = 'CATEGORIE-TEST-FICHE';
    private const PRODUCT_NAME = 'PRODUIT-RATTACHE-TEST-FICHE';

    private KernelBrowser $client;

    private int $adminId = 0;
    private int $categoryId = 0;
    private int $productId = 0;

    protected function setUp(): void
    {
        parent::setUp();

        $this->client = static::createClient();

        /** @var EntityManagerInterface $em */
        $em = static::getContainer()->get(EntityManagerInterface::class);

        $admin = (new User())
            ->setEmail('admin-categories@test.local')
            ->setRoles(['ROLE_ADMIN'])
            ->setPassword('hash-test');

        $category = (new Category())->setName(self::CATEGORY_NAME);

        $product = (new Product())
            ->setName(self::PRODUCT_NAME)
            ->setSlug('produit-rattache-test-fiche')
            ->setPrice(2500.0)
            ->setIsPromotion(false)
            ->setState('actif')
            ->addCategory($category);

        foreach ([$admin, $category, $product] as $entity) {
            $em->persist($entity);
        }
        $em->flush();

        $this->adminId = (int) $admin->getId();
        $this->categoryId = (int) $category->getId();
        $this->productId = (int) $product->getId();
    }

    protected function tearDown(): void
    {
        try {
            /** @var EntityManagerInterface $em */
            $em = static::getContainer()->get(EntityManagerInterface::class);
            $em->clear();

            $product = $em->find(Product::class, $this->productId);
            if ($product) {
                $em->remove($product);
            }

            $category = $em->find(Category::class, $this->categoryId);
            if ($category) {
                $em->remove($category);
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

    public function testCategoryDetailsPageRendersRattachProducts(): void
    {
        $this->client->loginUser($this->admin());

        $crawler = $this->client->request('GET', '/admin/categories/' . $this->categoryId);

        self::assertSame(
            200,
            $this->client->getResponse()->getStatusCode(),
            (string) $this->client->getResponse()->getContent()
        );

        // Nom de la catégorie + produit rattaché listé dans la table.
        self::assertStringContainsString(self::CATEGORY_NAME, $crawler->filter('body')->text());
        self::assertStringContainsString(self::PRODUCT_NAME, $crawler->filter('body')->text());
    }

    public function testCategoryDetailsPageListsEmptyCategoryWithoutError(): void
    {
        /** @var EntityManagerInterface $em */
        $em = static::getContainer()->get(EntityManagerInterface::class);

        $empty = (new Category())->setName('CATEGORIE-VIDE-TEST-FICHE');
        $em->persist($empty);
        $em->flush();
        $emptyId = (int) $empty->getId();

        try {
            $this->client->loginUser($this->admin());

            $this->client->request('GET', '/admin/categories/' . $emptyId);

            self::assertSame(200, $this->client->getResponse()->getStatusCode());
        } finally {
            $em->clear();
            $remaining = $em->find(Category::class, $emptyId);
            if ($remaining) {
                $em->remove($remaining);
                $em->flush();
            }
        }
    }

    public function testProductListingFilterByCategoryReturnsRattachProducts(): void
    {
        $this->client->loginUser($this->admin());

        $this->client->request('GET', '/admin/produits?categorie=' . $this->categoryId);

        self::assertSame(
            200,
            $this->client->getResponse()->getStatusCode(),
            (string) $this->client->getResponse()->getContent()
        );

        self::assertStringContainsString(
            self::PRODUCT_NAME,
            $this->client->getResponse()->getContent() ?: ''
        );
    }

    private function admin(): User
    {
        /** @var EntityManagerInterface $em */
        $em = static::getContainer()->get(EntityManagerInterface::class);

        $admin = $em->find(User::class, $this->adminId);
        self::assertInstanceOf(User::class, $admin);

        return $admin;
    }
}
