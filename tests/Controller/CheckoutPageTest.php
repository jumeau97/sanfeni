<?php

namespace App\Tests\Controller;

use App\Entity\Address;
use App\Entity\Carrier;
use App\Entity\Order;
use App\Entity\OrderDetails;
use App\Entity\Product;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\DomCrawler\Crawler;

/**
 * Verrouille le rendu du tunnel de commande (/commande puis
 * /commande/recapitulatif).
 *
 * Régression couverte : les deux templates portaient ~230 lignes de
 * balisage commenté (l'ancienne version du checkout et le récapitulatif),
 * plus un {% block script %} intégralement commenté sur la page de
 * paiement. Aucun test ne touchait ce tunnel.
 *
 * On vérifie ici que les deux étapes rendent, que la barre d'action fixe
 * en bas d'écran est bien présente, et que le code mort a disparu.
 *
 * Toutes les données sont créées puis détruites à chaque test.
 */
final class CheckoutPageTest extends WebTestCase
{
    private const PRODUCT_NAME = 'PRODUIT-TEST-COMMANDE';
    private const PRODUCT_PRICE = 3000.0;
    private const USER_EMAIL = 'checkout-test@example.test';

    private KernelBrowser $client;

    private int $userId = 0;
    private int $addressId = 0;
    private int $carrierId = 0;
    private int $productId = 0;

    protected function setUp(): void
    {
        parent::setUp();

        $this->client = static::createClient();
        $em = $this->em();

        $user = (new User())
            ->setEmail(self::USER_EMAIL)
            ->setPassword('irrelevant-hash')
            ->setFirstName('Checkout')
            ->setLastName('Test');

        $address = (new Address())
            ->setUser($user)
            ->setName('Domicile')
            ->setFirstName('Checkout')
            ->setLastName('Test')
            ->setAddress('1 rue du test')
            ->setCity('Bamako')
            ->setCountry('Mali')
            ->setPhone('+22300000000');

        $carrier = (new Carrier())
            ->setName('Transporteur test')
            ->setDescription('Livraison test')
            ->setPrice(1000.0);

        $product = (new Product())
            ->setName(self::PRODUCT_NAME)
            ->setSlug('produit-test-commande')
            ->setPrice(self::PRODUCT_PRICE)
            ->setIsPromotion(false)
            ->setState('actif');

        $em->persist($user);
        $em->persist($address);
        $em->persist($carrier);
        $em->persist($product);
        $em->flush();

        $this->userId = (int) $user->getId();
        $this->addressId = (int) $address->getId();
        $this->carrierId = (int) $carrier->getId();
        $this->productId = (int) $product->getId();

        $this->client->loginUser($user);
    }

    protected function tearDown(): void
    {
        try {
            $em = $this->em();
            $em->clear();

            // Ordre respecte les contraintes de clé étrangère.
            $orders = $em->getRepository(Order::class)->findBy(['user' => $this->userId]);
            foreach ($orders as $order) {
                foreach ($em->getRepository(OrderDetails::class)->findBy(['commande' => $order]) as $detail) {
                    $em->remove($detail);
                }
                $em->remove($order);
            }

            foreach ([Address::class => $this->addressId,
                      Carrier::class => $this->carrierId,
                      Product::class => $this->productId,
                      User::class => $this->userId] as $class => $id) {
                if ($entity = $em->find($class, $id)) {
                    $em->remove($entity);
                }
            }

            $em->flush();
        } finally {
            parent::tearDown();
        }
    }

    public function testCheckoutPageRendersFormAndFixedActionBarWithoutDeadMarkup(): void
    {
        $this->fillCart();

        $crawler = $this->client->request('GET', '/commande');

        self::assertSame(
            200,
            $this->client->getResponse()->getStatusCode(),
            (string) $this->client->getResponse()->getContent()
        );

        // La barre d'action fixe en bas d'écran porte total + submit.
        $bar = $crawler->filter('.wb-actionbar');
        self::assertCount(1, $bar);
        self::assertCount(1, $bar->filter('.wb-actionbar__total'));
        self::assertCount(1, $bar->filter('button.wb-actionbar__btn[type="submit"]'));

        // Le formulaire pointe bien vers le récapitulatif (on cible ce
        // formulaire-là : le header contient lui aussi un <form> de
        // recherche, sans attribut action).
        self::assertCount(
            1,
            $crawler->filter('form[action*="/commande/recapitulatif"]')
        );

        // Le balisage de l'ancien checkout (commenté) a disparu.
        $html = $this->client->getResponse()->getContent() ?: '';
        self::assertStringNotContainsString('checkout-wrapper', $html);
        self::assertStringNotContainsString('order-summery', $html);
        self::assertStringNotContainsString('Hello OrderController', $html);
    }

    public function testOrderRecapRendersPaymentPageWithFixedActionBar(): void
    {
        $this->fillCart();

        // Le jeton CSRF est celui de la session ouverte sur /commande.
        $crawler = $this->client->request('GET', '/commande');
        $token = $crawler->filter('input[name="order[_token]"]')->attr('value');
        self::assertNotEmpty($token);

        $crawler = $this->client->request('POST', '/commande/recapitulatif', [
            'order' => [
                'adresses' => $this->addressId,
                'carriers' => $this->carrierId,
                '_token' => $token,
            ],
        ]);

        self::assertSame(
            200,
            $this->client->getResponse()->getStatusCode(),
            'Le récapitulatif doit rendre (200) et non rediriger vers le panier : '.
            (string) $this->client->getResponse()->getContent()
        );

        // Barre de paiement fixe : total + bouton « Confirmer ».
        $bar = $crawler->filter('.wb-actionbar');
        self::assertCount(1, $bar);
        self::assertCount(1, $bar->filter('.wb-actionbar__total'));
        self::assertCount(1, $bar->filter('button.wb-actionbar__btn[type="submit"]'));

        // En desktop, le total de la barre est masqué (c'est .total-banner
        // qui l'affiche) : la règle existe bien dans le CSS de la page.
        self::assertStringContainsString(
            '.checkout-recap .wb-actionbar__total',
            $this->client->getResponse()->getContent() ?: ''
        );

        // La commande et sa ligne ont bien été persistees.
        $orders = $this->em()->getRepository(Order::class)->findBy(['user' => $this->userId]);
        self::assertCount(1, $orders);
        self::assertCount(
            1,
            $this->em()->getRepository(OrderDetails::class)->findBy(['commande' => $orders[0]])
        );
    }

    /** Ajoute un article au panier de la session en cours. */
    private function fillCart(): void
    {
        $this->client->request('GET', '/panier/add/' . $this->productId);
    }

    private function em(): EntityManagerInterface
    {
        /** @var EntityManagerInterface $em */
        $em = static::getContainer()->get(EntityManagerInterface::class);

        return $em;
    }
}
