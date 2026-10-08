<?php

namespace App\Service\Admin;

use App\Entity\Boutique;
use App\Entity\User;
use App\Security\CredentialsMailer;
use App\Security\TemporaryPasswordGenerator;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

/**
 * Création du compte de gestionnaire lié à une boutique.
 *
 * À la création d'une boutique depuis le back-office, un compte utilisateur
 * est créé automatiquement avec l'e-mail de la boutique, un mot de passe
 * provisoire généré aléatoirement puis envoyé au titulaire (jamais codé en
 * dur, jamais affiché).
 *
 * (Remplace l'ancien ShopEventSubscriber qui dépendait de l'événement
 * EasyAdmin AfterEntityPersistedEvent.).
 */
final class ShopAccountCreator
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly UserPasswordHasherInterface $passwordHasher,
        private readonly TemporaryPasswordGenerator $passwordGenerator,
        private readonly CredentialsMailer $credentialsMailer,
        private readonly LoggerInterface $logger,
    ) {
    }

    /**
     * @return bool true si un compte a réellement été créé
     */
    public function createCredentialsFor(Boutique $boutique): bool
    {
        $email = $boutique->getEmail();
        if (!$email) {
            return false;
        }

        // Une boutique peut être recréée avec la même adresse : on ne crée
        // pas de doublon si un compte existe déjà pour cet e-mail.
        if ($this->entityManager->getRepository(User::class)->findOneBy(['email' => $email])) {
            return false;
        }

        $user = new User();
        $user->setEmail($email);
        $user->setShop($boutique);

        $plainPassword = $this->passwordGenerator->generate();
        $user->setPassword(
            $this->passwordHasher->hashPassword($user, $plainPassword)
        );

        $this->entityManager->persist($user);
        $this->entityManager->flush();

        try {
            $this->credentialsMailer->send($user, $plainPassword);
        } catch (\Throwable $exception) {
            // L'e-mail ne doit jamais faire échouer la création de boutique.
            $this->logger->error(
                'Envoi des identifiants de boutique impossible : ' . $exception->getMessage(),
                ['exception' => $exception]
            );
        }

        return true;
    }
}
