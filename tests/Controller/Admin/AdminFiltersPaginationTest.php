<?php

namespace App\Tests\Controller\Admin;

use App\Entity\Boutique;
use App\Entity\Carrier;
use App\Entity\Category;
use App\Entity\Order;
use App\Entity\Product;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Verrouille la PAGINATION et les FILTRES des listes du back-office :
 *
 *  · chaque liste serveur renvoie une barre de pagination (.admin-pagination)
 *    dès que le nombre d'éléments dépasse la page (20) ;
 *  · les liens de pagination CONSERVENT les filtres en cours (q, state…) ;
 *  · les filtres réduisent réellement les résultats (recherche, visibilité,
 *    catégorie, statut de commande) ;
 *  · la liste des transporteurs — la dernière ajoutée — obéit à la même règle.
 *
 * Les fixtures sont créées puis détruites à chaque test : la base de test
 * (db_vente_test) reste vide après exécution.
 */
final class AdminFiltersPaginationTest extends WebTestCase
{
    private const ADMIN = 'admin-filters@test.local';

    private KernelBrowser $client;

    private int $adminId = 0;

    /** @var list<int> */
    private array $userIds = [];

    /** @var list<int> */
    private array $categoryIds = [];

    /** @var list<int> */
    private array $productIds = [];

    /** @var list<int> */
    private array $orderIds = [];

    /** @var list<int> */
    private array $shopIds = [];

    /** @var list<int> */
    private array $carrierIds = [];

    protected function setUp(): void
    {
        parent::setUp();

        $this->client = static::createClient();

        /** @var EntityManagerInterface $em */
        $em = static::getContainer()->get(EntityManagerInterface::class);

        $admin = (new User())
            ->setEmail(self::ADMIN)
            ->setRoles(['ROLE_ADMIN'])
            ->setPassword('hash-test');
        $em->persist($admin);

        // 21 comptes « page-user » → au-delà de la page de 20.
        $users = [];
        for ($i = 1; $i <= 21; ++$i) {
            $user = (new User())
                ->setEmail(sprintf('page-user-%02d@test.local', $i))
                ->setPassword('hash-test')
                ->setFirstName('Page')
                ->setLastName(sprintf('User%02d', $i));
            $em->persist($user);
            $users[] = $user;
        }

        $categories = [];
        foreach (['FILTRE-CAT-UNIQUE', 'AUTRE-CAT-UNIQUE'] as $name) {
            $category = (new Category())->setName($name);
            $em->persist($category);
            $categories[] = $category;
        }

        $em->flush();

        $this->adminId = (int) $admin->getId();
        foreach ($users as $user) {
            $this->userIds[] = (int) $user->getId();
        }
        foreach ($categories as $category) {
            $this->categoryIds[] = (int) $category->getId();
        }

        // --- Produits (recherche, visibilité, catégorie) ---
        $productActif = (new Product())
            ->setName('PRODUIT-FILTRE-ACTIF')
            ->setSlug('produit-filtre-actif')
            ->setPrice(1000.0)
            ->setIsPromotion(false)
            ->setState('actif');
        $productActif->addCategory($categories[0]);

        $productInactif = (new Product())
            ->setName('PRODUIT-FILTRE-INACTIF')
            ->setSlug('produit-filtre-inactif')
            ->setPrice(2000.0)
            ->setIsPromotion(false)
            ->setState('inactif');

        // --- Commandes (recherche, statut) ---
        $orders = [];
        foreach ([['FILTRE-REF-001', 'En attente'], ['FILTRE-REF-002', 'Livrée']] as $i => [$ref, $state]) {
            $order = (new Order())
                ->setUser($admin)
                ->setCreatedAt(new \DateTimeImmutable('-' . ($i + 1) . ' days'))
                ->setCarrierName('Livraison test')
                ->setCarrierPrice(500.0)
                ->setDelivery('Adresse test')
                ->setReference($ref);
            $order->setState($state);
            $em->persist($order);
            $orders[] = $order;
        }

        // --- Boutiques (recherche) ---
        $shops = [];
        foreach (['BOUTIQUE-FILTRE-X', 'BOUTIQUE-FILTRE-Y'] as $i => $name) {
            $shop = (new Boutique())
                ->setName($name)
                ->setEmail(sprintf('filtre-%d@test.local', $i))
                ->setPropPhoneNumber('060606060' . $i);
            $em->persist($shop);
            $shops[] = $shop;
        }

        // Rattachement au filtre « Boutique » : 01-05 → X, 06-10 → Y.
        foreach (\array_slice($users, 0, 5) as $user) {
            $user->setShop($shops[0]);
        }
        foreach (\array_slice($users, 5, 5) as $user) {
            $user->setShop($shops[1]);
        }
        $productActif->setShop($shops[0]);

        // --- Transporteurs (recherche + pagination) ---
        $carriers = [];
        for ($i = 1; $i <= 21; ++$i) {
            $carrier = (new Carrier())
                ->setName($i === 1 ? 'TRANSPORTEUR-FILTRE-XYZ' : sprintf('Transporteur-%02d', $i))
                ->setDescription($i === 1 ? 'Description filtre transporteur' : 'Description standard ' . $i)
                ->setPrice(1000.0 + $i);
            $em->persist($carrier);
            $carriers[] = $carrier;
        }

        $em->persist($productActif);
        $em->persist($productInactif);
        $em->flush();

        $this->productIds = [(int) $productActif->getId(), (int) $productInactif->getId()];
        foreach ($orders as $order) {
            $this->orderIds[] = (int) $order->getId();
        }
        foreach ($shops as $shop) {
            $this->shopIds[] = (int) $shop->getId();
        }
        foreach ($carriers as $carrier) {
            $this->carrierIds[] = (int) $carrier->getId();
        }
    }

    protected function tearDown(): void
    {
        try {
            /** @var EntityManagerInterface $em */
            $em = static::getContainer()->get(EntityManagerInterface::class);
            $em->clear();

            foreach ($this->orderIds as $id) {
                if ($entity = $em->find(Order::class, $id)) {
                    $em->remove($entity);
                }
            }
            foreach ($this->productIds as $id) {
                if ($entity = $em->find(Product::class, $id)) {
                    $em->remove($entity);
                }
            }
            foreach ($this->shopIds as $id) {
                if ($entity = $em->find(Boutique::class, $id)) {
                    $em->remove($entity);
                }
            }
            foreach ($this->carrierIds as $id) {
                if ($entity = $em->find(Carrier::class, $id)) {
                    $em->remove($entity);
                }
            }
            foreach ($this->userIds as $id) {
                if ($entity = $em->find(User::class, $id)) {
                    $em->remove($entity);
                }
            }
            if ($this->adminId && ($admin = $em->find(User::class, $this->adminId))) {
                $em->remove($admin);
            }
            foreach ($this->categoryIds as $id) {
                if ($entity = $em->find(Category::class, $id)) {
                    $em->remove($entity);
                }
            }
            $em->flush();
        } finally {
            parent::tearDown();
        }
    }

    // ------------------------------------------------------------------ Pagination

    public function testUserListPaginatesBeyondPageLimit(): void
    {
        $this->login();

        $html = $this->get('/admin/utilisateurs');

        self::assertSame(200, $this->client->getResponse()->getStatusCode());
        self::assertStringContainsString('admin-pagination', $html, 'La liste des utilisateurs doit paginer.');
        self::assertStringContainsString('page=2', $html, 'La 2ᵉ page doit être proposée.');
    }

    public function testPaginationLinksKeepCurrentFilters(): void
    {
        $this->login();

        $html = $this->get('/admin/utilisateurs?q=page-user');

        self::assertStringContainsString(
            'q=page-user&amp;page=2',
            $html,
            'Les liens de pagination doivent conserver le filtre de recherche.'
        );
    }

    // ------------------------------------------------------------------ Filtres

    public function testUserSearchFilterNarrowsList(): void
    {
        $this->login();

        $this->assertFilters('/admin/utilisateurs?q=page-user-07', 'page-user-07@test.local', 'page-user-08@test.local');
    }

    public function testProductFiltersNarrowList(): void
    {
        $this->login();

        $this->assertFilters('/admin/produits?q=PRODUIT-FILTRE-ACTIF', 'PRODUIT-FILTRE-ACTIF', 'PRODUIT-FILTRE-INACTIF');
        $this->assertFilters('/admin/produits?state=inactif', 'PRODUIT-FILTRE-INACTIF', 'PRODUIT-FILTRE-ACTIF');
        $this->assertFilters(
            '/admin/produits?categorie=' . $this->categoryIds[0],
            'PRODUIT-FILTRE-ACTIF',
            'PRODUIT-FILTRE-INACTIF'
        );
    }

    public function testOrderFiltersNarrowList(): void
    {
        $this->login();

        $this->assertFilters('/admin/commandes?q=FILTRE-REF-001', 'FILTRE-REF-001', 'FILTRE-REF-002');
        $this->assertFilters('/admin/commandes?state=Livr%C3%A9e', 'FILTRE-REF-002', 'FILTRE-REF-001');
    }

    public function testCategoryAndBoutiqueFiltersNarrowList(): void
    {
        $this->login();

        $this->assertFilters('/admin/categories?q=FILTRE-CAT-UNIQUE', 'FILTRE-CAT-UNIQUE', 'AUTRE-CAT-UNIQUE');
        $this->assertFilters('/admin/boutiques?q=BOUTIQUE-FILTRE-X', 'BOUTIQUE-FILTRE-X', 'BOUTIQUE-FILTRE-Y');
        $this->assertFilters(
            '/admin/utilisateurs?boutique=' . $this->shopIds[0],
            'page-user-01@test.local',
            'page-user-06@test.local'
        );
        $this->assertFilters(
            '/admin/produits?boutique=' . $this->shopIds[0],
            'PRODUIT-FILTRE-ACTIF',
            'PRODUIT-FILTRE-INACTIF'
        );
    }

    /**
     * Le formulaire de filtre envoie « boutique= », « categorie= », « state= »
     * (option « — Toutes — ») : ces valeurs doivent être ignorées, pas planter
     * la page.
     *
     * Régression : InputBag::getInt() levait une BadRequestException
     * (« Input value "boutique" is invalid and flag "FILTER_NULL_ON_FAILURE"
     * was not set ») à chaque soumission de filtre.
     */
    public function testFilterFormSubmissionWithEmptyOrInvalidValuesDoesNotCrash(): void
    {
        $this->login();

        // Valeurs vides réellement produites par les sélects du formulaire.
        $this->get('/admin/produits?q=&state=&categorie=&boutique=');
        $this->get('/admin/utilisateurs?q=&boutique=');
        $this->get('/admin/commandes?q=&state=&page=');
        $this->get('/admin/categories?q=&page=');
        $this->get('/admin/boutiques?q=&page=');
        $this->get('/admin/transporteurs?q=&page=');

        // Valeurs non numériques saisies dans l'URL.
        $this->get('/admin/produits?categorie=boutique&boutique=boutique&state=boutique');
        $this->get('/admin/utilisateurs?boutique=boutique&page=abc');

        // Un « page » invalide retombe sur la première page (liste triée par
        // identifiant décroissant → l'utilisateur le plus récent en tête).
        self::assertStringContainsString('page-user-21@test.local', $this->get('/admin/utilisateurs?page=abc'));
    }

    // ------------------------------------------------------------------ Transporteurs

    public function testCarrierListIsFilteredAndPaginated(): void
    {
        $this->login();

        $html = $this->get('/admin/transporteurs');

        self::assertSame(200, $this->client->getResponse()->getStatusCode());
        self::assertStringContainsString('admin-filters', $html, 'Les transporteurs doivent avoir une barre de filtres.');
        self::assertStringContainsString('admin-pagination', $html, 'Les transporteurs doivent paginer.');
        self::assertStringContainsString('page=2', $html, 'La 2ᵉ page doit être proposée.');

        $this->assertFilters('/admin/transporteurs?q=TRANSPORTEUR-FILTRE-XYZ', 'TRANSPORTEUR-FILTRE-XYZ', 'Transporteur-02');

        $filtered = $this->get('/admin/transporteurs?q=Transporteur');
        self::assertStringContainsString(
            'q=Transporteur&amp;page=2',
            $filtered,
            'La pagination des transporteurs doit conserver le filtre de recherche.'
        );
    }

    // ------------------------------------------------------------------ Helpers

    /**
     * Vérifie qu'une requête affiche $needle et masque $other.
     */
    private function assertFilters(string $uri, string $needle, string $other): void
    {
        $html = $this->get($uri);

        self::assertStringContainsString($needle, $html, sprintf('Résultat attendu absent : %s', $uri));
        self::assertStringNotContainsString($other, $html, sprintf('Filtre inopérant (élément non filtré présent) : %s', $uri));
    }

    private function get(string $uri): string
    {
        $this->client->request('GET', $uri);

        self::assertSame(200, $this->client->getResponse()->getStatusCode(), 'Statut attendu sur ' . $uri);

        return (string) $this->client->getResponse()->getContent();
    }

    private function login(): void
    {
        /** @var EntityManagerInterface $em */
        $em = static::getContainer()->get(EntityManagerInterface::class);

        /** @var User $admin */
        $admin = $em->find(User::class, $this->adminId);
        $this->client->loginUser($admin);
    }
}
