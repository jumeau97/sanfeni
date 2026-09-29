<?php

namespace App\Security;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\EntryPoint\AuthenticationEntryPointInterface;

/**
 * Point d'entrée d'authentification du firewall "main".
 *
 * Le firewall "main" authentifie deux types de clients :
 *  - le navigateur (formulaire /login, session)  -> on redirige vers la page de connexion ;
 *  - le frontend externe (Authorization: Bearer) -> on renvoie un 401 JSON exploitable.
 */
final class AppAuthenticationEntryPoint implements AuthenticationEntryPointInterface
{
    public function __construct(
        private readonly UrlGeneratorInterface $urlGenerator,
    ) {
    }

    public function start(Request $request, ?AuthenticationException $authException = null): Response
    {
        if ($this->expectsJson($request)) {
            return new JsonResponse([
                'code' => Response::HTTP_UNAUTHORIZED,
                'message' => 'Authentification requise. Veuillez fournir un token JWT valide.',
            ], Response::HTTP_UNAUTHORIZED, [
                'WWW-Authenticate' => 'Bearer',
            ]);
        }

        return new RedirectResponse($this->urlGenerator->generate('app_login'));
    }

    private function expectsJson(Request $request): bool
    {
        if ($request->headers->has('Authorization')) {
            return true;
        }

        if ($request->isXmlHttpRequest()) {
            return true;
        }

        $accept = $request->headers->get('Accept') ?? '';

        return str_contains($accept, 'application/json') && !str_contains($accept, 'text/html');
    }
}
