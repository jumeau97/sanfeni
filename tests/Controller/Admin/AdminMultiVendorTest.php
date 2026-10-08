<?php

namespace App\Tests\Controller\Admin;

use App\Entity\Boutique;
use App\Entity\Order;
use App\Entity\OrderDetails;
use App\Entity\Product;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

/**
 * Verrouille le back-office sur mesure et sa logique MULTI-VENDEUR :
 *
 *  · un client lambda connecté est refusé (403) sur /admin ;
 *  · l'administrateur voit toutes les données ;
 *  · chaque vendeur ne voit QUE ses produits et les commandes contenant
 *    SES articles, et ne peut traiter QUE ses propres lignes ;
 *  · valider une ligne recalcule automatiquement l'état de la commande.
 *
 * Les fixtures sont créées puis détruites à chaque test : la base de test
 * (db_vente_test) reste vide après exécution.
 */
final class AdminMultiVendorTest extends WebTestCase
{
    private KernelBrowser $client;

    /** @var array<string, int> */
    private array $ids = [];

    protected function setUp(): void
    {
        parent::setUp();

        $this->client = static::createClient();

        /** @var EntityManagerInterface $em */
        $em = static::getContainer()->get(EntityManagerInterface::class);

        // --- Boutiques ---
        $shopA = (new Boutique())
            ->setName('BOUTIQUE-ALPHA')
            ->setEmail('alpha@test.local')
            ->setPropPhoneNumber('0101010101');
        $shopB = (new Boutique())
            ->setName('BOUTIQUE-BETA')
            ->setEmail('beta@test.local')
            ->setPropPhoneNumber('0202020202');

        // --- Comptes ---
        $admin = (new User())
            ->setEmail('admin@test.local')
            ->setRoles(['ROLE_ADMIN'])
            ->setPassword('hash-test');

        $vendorA = (new User())
            ->setEmail('vendeur-a@test.local')
            ->setPassword('hash-test')
            ->setShop($shopA);

        $vendorB = (new User())
            ->setEmail('vendeur-b@test.local')
            ->setPassword('hash-test')
            ->setShop($shopB);

        $customer = (new User())
            ->setEmail('client@test.local')
            ->setRoles(['ROLE_CUSTOMER'])
            ->setPassword('hash-test');

        // --- Produits ---
        $productA = (new Product())
            ->setName('PRODUIT-ALPHA-UNIQUE')
            ->setSlug('produit-alpha-unique')
            ->setPrice(1000.0)
            ->setShop($shopA)
            ->setIsPromotion(false)
            ->setState('actif');

        $productB = (new Product())
            ->setName('PRODUIT-BETA-UNIQUE')
            ->setSlug('produit-beta-unique')
            ->setPrice(2000.0)
            ->setShop($shopB)
            ->setIsPromotion(false)
            ->setState('actif');

        // --- Commande contenant les deux boutiques ---
        $order = (new Order())
            ->setUser($customer)
            ->setCreatedAt(new \DateTimeImmutable())
            ->setCarrierName('Livraison test')
            ->setCarrierPrice(500.0)
            ->setDelivery('Client test<br>Abidjan')
            ->setReference('TEST-REF-001');
        $order->setState('En attente');

        $lineA = (new OrderDetails())
            ->setCommande($order)
            ->setProduit($productA)
            ->setProduct($productA->getName())
            ->setQuantity(1)
            ->setPrice(1000.0)
            ->setTotal(1000.0);
        $lineA->setState('En attente');

        $lineB = (new OrderDetails())
            ->setCommande($order)
            ->setProduit($productB)
            ->setProduct($productB->getName())
            ->setQuantity(2)
            ->setPrice(2000.0)
            ->setTotal(4000.0);
        $lineB->setState('En attente');

        $entities = [
            $shopA, $shopB, $admin, $vendorA, $vendorB, $customer,
            $productA, $productB, $order, $lineA, $lineB,
        ];

        try {
            foreach ($entities as $entity) {
                $em->persist($entity);
            }
            $em->flush();
        } catch (\Throwable $exception) {
            // Ne jamais laisser de données partielles dans la base de test.
            foreach ($entities as $entity) {
                if ($em->contains($entity)) {
                    $em->remove($entity);
                }
            }
            try {
                $em->flush();
            } catch (\Throwable) {
                // Best effort.
            }
            throw $exception;
        }

        $this->ids = [
            'shopA' => $shopA->getId(),
            'shopB' => $shopB->getId(),
            'admin' => $admin->getId(),
            'vendorA' => $vendorA->getId(),
            'vendorB' => $vendorB->getId(),
            'customer' => $customer->getId(),
            'productA' => $productA->getId(),
            'productB' => $productB->getId(),
            'order' => $order->getId(),
            'lineA' => $lineA->getId(),
            'lineB' => $lineB->getId(),
        ];
    }

    protected function tearDown(): void
    {
        try {
            if ($this->ids !== []) {
                /** @var EntityManagerInterface $em */
                $em = static::getContainer()->get(EntityManagerInterface::class);
                $em->clear();

                $order = $em->find(Order::class, $this->ids['order']);
                if ($order) {
                    foreach ($order->getOrderDetails() as $line) {
                        $em->remove($line);
                    }
                    $em->remove($order);
                }

                $cleanup = [
                    Product::class => ['productA', 'productB'],
                    User::class => ['admin', 'vendorA', 'vendorB', 'customer'],
                    Boutique::class => ['shopA', 'shopB'],
                ];

                foreach ($cleanup as $class => $keys) {
                    foreach ($keys as $key) {
                        $entity = $em->find($class, $this->ids[$key]);
                        if ($entity) {
                            $em->remove($entity);
                        }
                    }
                }

                $em->flush();
            }
        } finally {
            // Le kernel doit être arrêté dans tous les cas, sinon le
            // createClient() du test suivant échoue.
            parent::tearDown();
        }
    }

    // ------------------------------------------------------------------
    //  Accès global
    // ------------------------------------------------------------------

    public function testAnonymousVisitorIsRedirectedToLogin(): void
    {
        $this->client->request('GET', '/admin');

        self::assertSame(302, $this->client->getResponse()->getStatusCode());
        self::assertStringContainsString('/login', $this->client->getResponse()->headers->get('Location', ''));
    }

    public function testConnectedCustomerWithoutShopIsForbidden(): void
    {
        $customer = $this->user('customer');
        $this->client->loginUser($customer);

        $this->client->request('GET', '/admin');

        self::assertSame(403, $this->client->getResponse()->getStatusCode());
    }

    public function testAdminCanAccessDashboardAndAllListings(): void
    {
        $this->client->loginUser($this->user('admin'));

        foreach ([
            '/admin',
            '/admin/produits',
            '/admin/categories',
            '/admin/commandes',
            '/admin/boutiques',
            '/admin/utilisateurs',
            '/admin/transporteurs',
        ] as $uri) {
            $this->client->request('GET', $uri);
            self::assertSame(200, $this->client->getResponse()->getStatusCode(), 'URI : ' . $uri);
        }

        // L'admin voit les deux boutiques dans le catalogue.
        $this->client->request('GET', '/admin/produits');
        $html = (string) $this->client->getResponse()->getContent();
        self::assertStringContainsString('PRODUIT-ALPHA-UNIQUE', $html);
        self::assertStringContainsString('PRODUIT-BETA-UNIQUE', $html);
    }

    // ------------------------------------------------------------------
    //  Périmètre vendeur
    // ------------------------------------------------------------------

    public function testVendorOnlySeesOwnProducts(): void
    {
        $this->client->loginUser($this->user('vendorA'));

        $this->client->request('GET', '/admin/produits');
        $html = (string) $this->client->getResponse()->getContent();

        self::assertSame(200, $this->client->getResponse()->getStatusCode());
        self::assertStringContainsString('PRODUIT-ALPHA-UNIQUE', $html);
        self::assertStringNotContainsString('PRODUIT-BETA-UNIQUE', $html);
    }

    public function testVendorCannotOpenProductOfAnotherShop(): void
    {
        $this->client->loginUser($this->user('vendorA'));

        $this->client->request('GET', '/admin/produits/' . $this->ids['productB']);

        self::assertSame(403, $this->client->getResponse()->getStatusCode());
    }

    public function testVendorOnlySeesOrdersContainingHisArticles(): void
    {
        $this->client->loginUser($this->user('vendorA'));

        $this->client->request('GET', '/admin/commandes');
        $html = (string) $this->client->getResponse()->getContent();
        self::assertStringContainsString('TEST-REF-001', $html);

        // Détail : ses articles sont visibles, ceux des autres masqués.
        $this->client->request('GET', '/admin/commandes/' . $this->ids['order']);
        $html = (string) $this->client->getResponse()->getContent();

        self::assertSame(200, $this->client->getResponse()->getStatusCode());
        self::assertStringContainsString('PRODUIT-ALPHA-UNIQUE', $html);
        self::assertStringNotContainsString('PRODUIT-BETA-UNIQUE', $html);
        self::assertStringContainsString('masqué', $html);
    }

    public function testVendorCanValidateOnlyHisOwnLine(): void
    {
        $this->client->loginUser($this->user('vendorA'));

        // 1. Ligne d'une autre boutique → refus (403).
        $this->client->request('POST', sprintf(
            '/admin/commandes/%d/lignes/%d',
            $this->ids['order'],
            $this->ids['lineB']
        ), ['_token' => $this->csrfToken(), 'quick_state' => 'Validée']);

        self::assertSame(403, $this->client->getResponse()->getStatusCode());

        // 2. Sa propre ligne → acceptée.
        $this->client->request('POST', sprintf(
            '/admin/commandes/%d/lignes/%d',
            $this->ids['order'],
            $this->ids['lineA']
        ), ['_token' => $this->csrfToken(), 'quick_state' => 'Validée']);

        self::assertSame(302, $this->client->getResponse()->getStatusCode());

        /** @var EntityManagerInterface $em */
        $em = static::getContainer()->get(EntityManagerInterface::class);
        $em->clear();

        $lineA = $em->find(OrderDetails::class, $this->ids['lineA']);
        $lineB = $em->find(OrderDetails::class, $this->ids['lineB']);
        $order = $em->find(Order::class, $this->ids['order']);

        self::assertSame('Validée', $lineA?->getState());
        self::assertSame('En attente', $lineB?->getState());
        // Une ligne traitée sur deux → la commande est en cours de traitement.
        self::assertSame('En cours de traitement', $order?->getState());
    }

    public function testVendorCannotForceGlobalOrderStatus(): void
    {
        $this->client->loginUser($this->user('vendorA'));

        $this->client->request('POST', '/admin/commandes/' . $this->ids['order'] . '/statut', [
            '_token' => $this->csrfToken(),
            'state' => 'Livrée',
        ]);

        self::assertSame(403, $this->client->getResponse()->getStatusCode());
    }

    public function testVendorOnlySeesHisOwnTeamAndShop(): void
    {
        $this->client->loginUser($this->user('vendorA'));

        $this->client->request('GET', '/admin/utilisateurs');
        $html = (string) $this->client->getResponse()->getContent();
        self::assertStringContainsString('vendeur-a@test.local', $html);
        self::assertStringNotContainsString('vendeur-b@test.local', $html);

        $this->client->request('GET', '/admin/boutiques');
        $html = (string) $this->client->getResponse()->getContent();
        self::assertStringContainsString('BOUTIQUE-ALPHA', $html);
        self::assertStringNotContainsString('BOUTIQUE-BETA', $html);
    }

    // ------------------------------------------------------------------
    //  Helpers
    // ------------------------------------------------------------------

    private function user(string $key): User
    {
        /** @var EntityManagerInterface $em */
        $em = static::getContainer()->get(EntityManagerInterface::class);

        /** @var User $user */
        $user = $em->find(User::class, $this->ids[$key]);

        return $user;
    }

    private function csrfToken(): string
    {
        /** @var CsrfTokenManagerInterface $tokenManager */
        $tokenManager = static::getContainer()->get('security.csrf.token_manager');

        return (string) $tokenManager->getToken('submit');
    }
}
