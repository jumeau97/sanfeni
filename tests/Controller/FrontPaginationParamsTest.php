<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Verrouille la robustesse des paramètres de pagination côté boutique
 * (« ?page= » / « ?limit= » vides ou non numériques).
 *
 * Régression : InputBag::getInt() levait une BadRequestException
 * (« Input value "page" is invalid and flag "FILTER_NULL_ON_FAILURE was
 * not set ») dès que la valeur n'était pas un entier.
 */
final class FrontPaginationParamsTest extends WebTestCase
{
    public function testHomePageAcceptsEmptyOrNonNumericPaginationParams(): void
    {
        $client = static::createClient();

        foreach (['/', '/?page=', '/?limit=', '/?page=abc&limit=abc', '/?page=0&limit=-5'] as $uri) {
            $client->request('GET', $uri);

            self::assertSame(200, $client->getResponse()->getStatusCode(), 'Statut attendu sur ' . $uri);
        }
    }
}
