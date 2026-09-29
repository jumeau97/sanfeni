<?php

namespace App\Tests\Security;

use PHPUnit\Framework\Attributes\DataProvider;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Verrouille le comportement du back-office face à un visiteur non connecté.
 *
 * Ces parcours sont interceptés par le firewall avant d'atteindre le
 * contrôleur : ils ne nécessitent donc aucune donnée métier.
 */
final class BackOfficeAccessControlTest extends WebTestCase
{
    /**
     * @return iterable<string, array{0: string}>
     */
    public static function protectedPaths(): iterable
    {
        yield 'dashboard commandes' => ['/dashboard/commande'];
        yield 'easyadmin' => ['/admin'];
        yield 'easyadmin users' => ['/admin/user'];
        yield 'compte client' => ['/account'];
    }

    #[DataProvider('protectedPaths')]
    public function testProtectedPathRedirectsAnonymousVisitor(string $path): void
    {
        $client = static::createClient();
        $client->request('GET', $path);

        self::assertSame(302, $client->getResponse()->getStatusCode());
        self::assertStringContainsString('/login', $client->getResponse()->headers->get('Location', ''));
    }

    /**
     * @return iterable<string, array{0: string}>
     */
    public static function jsonProtectedPaths(): iterable
    {
        yield 'liste utilisateurs' => ['/dashboard/list-utilisateur'];
        yield 'liste commandes' => ['/dashboard/commande'];
        yield 'ajout utilisateur' => ['/dashboard/add-utilisateur'];
    }

    #[DataProvider('jsonProtectedPaths')]
    public function testJsonApiReturns401JsonInsteadOfRedirect(string $path): void
    {
        $client = static::createClient();
        $client->request('GET', $path, [], [], ['HTTP_ACCEPT' => 'application/json']);

        self::assertSame(401, $client->getResponse()->getStatusCode());
        self::assertStringContainsString('application/json', $client->getResponse()->headers->get('Content-Type', ''));

        $payload = json_decode($client->getResponse()->getContent() ?: '', true);
        self::assertIsArray($payload);
        self::assertSame(401, $payload['code'] ?? null);
    }

    public function testBearerTokenWithInvalidValueIsRejected(): void
    {
        $client = static::createClient();
        $client->request('GET', '/dashboard/list-utilisateur', [], [], [
            'HTTP_ACCEPT' => 'application/json',
            'HTTP_AUTHORIZATION' => 'Bearer not.a.token',
        ]);

        self::assertSame(401, $client->getResponse()->getStatusCode());
    }

    public function testLoginPageRemainsPublic(): void
    {
        $client = static::createClient();
        $client->request('GET', '/login');

        self::assertSame(200, $client->getResponse()->getStatusCode());
    }

    /**
     * La règle ^/dashboard/login doit précéder ^/dashboard, sinon le
     * json_login serait bloqué par sa propre règle d'accès.
     */
    public function testJsonLoginEndpointStaysReachable(): void
    {
        $client = static::createClient();
        $client->request(
            'POST',
            '/dashboard/login_check',
            [],
            [],
            ['HTTP_ACCEPT' => 'application/json', 'CONTENT_TYPE' => 'application/json'],
            json_encode(['username' => 'nobody@example.com', 'password' => 'wrong'])
        );

        // 401 = identifiants refusés par json_login, et non accès bloqué (403/302).
        self::assertSame(401, $client->getResponse()->getStatusCode());
        self::assertNull($client->getResponse()->headers->get('Location'));
    }
}
