<?php

namespace App\Tests\Controller;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Verrouille le rendu de la page panier du site vitrine (/mon-panier).
 *
 * Régression couverte : le template affichait le titre par défaut
 * « Hello CartController! », ~200 lignes de code mort commenté et une
 * imbriquation <section> dupliquée. On verrouille ici les deux états du
 * panier (vide / avec articles) et la structure attendue.
 *
 * Les fixtures sont créées puis détruites à chaque test : la base de test
 * reste vide après exécution.
 */
final class CartPageTest extends WebTestCase
{
    private const PRODUCT_NAME = 'PRODUIT-TEST-PANIER';
    private const PRODUCT_SLUG = 'produit-test-panier';
    private const UNIT_PRICE = 2500.0;
    private const QUANTITY = 2;

    private KernelBrowser $client;
    private int $productId = 0;

    protected function setUp(): void
    {
        parent::setUp();

        $this->client = static::createClient();

        /** @var EntityManagerInterface $em */
        $em = static::getContainer()->get(EntityManagerInterface::class);

        $product = (new Product())
            ->setName(self::PRODUCT_NAME)
            ->setSlug(self::PRODUCT_SLUG)
            ->setPrice(self::UNIT_PRICE)
            ->setIsPromotion(false)
            ->setState('actif');

        $em->persist($product);
        $em->flush();

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

            $em->flush();
        } finally {
            parent::tearDown();
        }
    }

    public function testEmptyCartRendersCleanStateWithoutLegacyTitle(): void
    {
        $crawler = $this->client->request('GET', '/mon-panier');

        self::assertSame(
            200,
            $this->client->getResponse()->getStatusCode(),
            (string) $this->client->getResponse()->getContent()
        );

        $html = $this->client->getResponse()->getContent() ?: '';

        // Le titre par défaut du squelette Symfony ne doit plus subsister.
        self::assertStringNotContainsString('Hello CartController', $html);

        // En-tête de page + état vide du composant.
        self::assertStringContainsString('Mon panier', $crawler->filter('h1')->text());
        self::assertStringContainsString('Votre panier est vide', $crawler->filter('body')->text());

        // Pas d'article → pas de barre d'action fixe (elle ne sert qu'à
        // porter le total + le CTA quand le panier est rempli).
        self::assertCount(0, $crawler->filter('.wb-actionbar'));
    }

    public function testCartWithArticlesRendersTableSummaryAndTotals(): void
    {
        // Deux articles : la ligne total doit différer du prix unitaire.
        $this->client->request('GET', '/panier/add/' . $this->productId);
        $this->client->request('GET', '/panier/add/' . $this->productId);

        $crawler = $this->client->request('GET', '/mon-panier');

        self::assertSame(
            200,
            $this->client->getResponse()->getStatusCode(),
            (string) $this->client->getResponse()->getContent()
        );

        $html = $this->client->getResponse()->getContent() ?: '';
        self::assertStringNotContainsString('Hello CartController', $html);

        // En-têtes de colonnes (le <tr> d'en-tête était vide avant).
        $headers = $crawler->filter('table.wb-cart-table thead th');
        self::assertCount(3, $headers);
        self::assertSame(
            ['Produit', 'Quantité', 'Total'],
            array_map('trim', $headers->extract(['_text']))
        );

        // Ligne d'article : nom, lien fiche, image, sélecteur de quantité.
        $row = $crawler->filter('tr.wb-cart-row');
        self::assertCount(1, $row);
        self::assertStringContainsString(self::PRODUCT_NAME, $row->text());
        self::assertSame(
            '/details/' . self::PRODUCT_SLUG,
            $row->filter('a.wb-cart-name')->attr('href')
        );
        // Illustration (image, ou le repli « boîte » si aucune n'est fournie).
        self::assertCount(1, $row->filter('.wb-cart-img'));

        $quantity = trim($row->filter('.wb-cart-qty-value')->text());
        self::assertSame((string) self::QUANTITY, $quantity);

        // Total de ligne et total général calculés (2 × 2 500).
        $expected = self::UNIT_PRICE * self::QUANTITY;
        self::assertSame($expected, $this->amount($row->filter('.wb-cart-line-total')->text()));
        self::assertSame(
            $expected,
            $this->amount($crawler->filter('#grand-total-amount')->text())
        );

        // Récapitulatif et appel à l'action présents.
        self::assertStringContainsString('Récapitulatif', $crawler->filter('.wb-cart-summary')->text());
        self::assertCount(1, $crawler->filter('a.wb-cart-cta[href="/commande"]'));

        // Barre d'action fixe en bas d'écran (mobile) : même total que
        // le récapitulatif et même destination, rendue par le composant
        // Live pour rester synchrone après un changement de quantité.
        $bar = $crawler->filter('.wb-actionbar');
        self::assertCount(1, $bar);
        self::assertSame($expected, $this->amount($bar->filter('.wb-actionbar__value')->text()));
        self::assertCount(1, $bar->filter('a.wb-actionbar__btn[href="/commande"]'));
    }

    /**
     * Extrait la valeur numérique d'un montant formaté (« 5 000 F CFA » → 5000.0),
     * indépendamment des espaces insécables utilisées par ICU.
     */
    private function amount(string $formatted): float
    {
        return (float) preg_replace('/[^\d.]/', '', $formatted);
    }
}
