<?php

namespace App\Security;

use App\Entity\User;
use App\Service\Utilisateur\UserInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\Mime\Address;

/**
 * Envoie à un nouvel utilisateur ses identifiants (e-mail + mot de passe
 * provisoire en clair).
 *
 * L'application ne dispose d'aucun flux « mot de passe oublié » : ce message
 * est le seul moyen pour l'utilisateur de récupérer son mot de passe, il ne
 * doit donc jamais être codé en dur.
 *
 * Un échuel d'envoi ne doit pas faire échouer la création du compte : il est
 * absorbé ici et tracé dans les logs.
 */
final class CredentialsMailer
{
    private const TEMPLATE = 'register/register_shop_email.html.twig';
    private const SUBJECT = 'Vos identifiants de connexion';

    public function __construct(
        private readonly UserInterface $userInterface,
        private readonly LoggerInterface $logger,
    ) {
    }

    public function send(User $user, string $plainPassword): void
    {
        if (!$user->getEmail()) {
            $this->logger->warning('Identifiants non envoyés : l\'utilisateur n\'a pas d\'adresse e-mail.', [
                'userId' => $user->getId(),
            ]);

            return;
        }

        try {
            $this->userInterface->sendingEmailTo(
                [new Address($user->getEmail())],
                self::SUBJECT,
                ['user' => $user, 'plainPassword' => $plainPassword],
                self::TEMPLATE
            );
        } catch (\Throwable $exception) {
            $this->logger->error('Impossible d\'envoyer les identifiants à '.$user->getEmail(), [
                'userId' => $user->getId(),
                'exception' => $exception,
            ]);
        }
    }
}
