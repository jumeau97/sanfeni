<?php

namespace App\EventSubscriber;

use App\Service\Admin\AdminScope;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;

/**
 * Filet de sécurité global du back-office sur mesure.
 *
 * security.yaml exige déjà un utilisateur totalement authentifié pour ^/admin ;
 * ce listener va plus loin : il refuse l'accès aux comptes qui ne sont ni
 * administrateur/manager, ni propriétaire d'une boutique (client lambda
 * connecté, par exemple). Il s'exécute APRÈS le firewall (priorité 0), donc
 * les visiteurs anonymes sont déjà redirigés par le firewall.
 *
 * Il protège TOUTES les routes /admin même si un contrôleur oublie de
 * déclencher sa propre vérification.
 */
final class AdminAccessSubscriber implements EventSubscriberInterface
{
    public function __construct(private readonly AdminScope $scope)
    {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST => 'onKernelRequest',
        ];
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        if (!$event->isMainRequest()) {
            return;
        }

        $path = $event->getRequest()->getPathInfo();

        if (!str_starts_with($path, '/admin')) {
            return;
        }

        $this->scope->guard();
    }
}
