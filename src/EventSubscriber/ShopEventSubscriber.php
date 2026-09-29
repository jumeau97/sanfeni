<?php

namespace App\EventSubscriber;

use App\Entity\Boutique;
use App\Entity\User;
use App\Security\CredentialsMailer;
use App\Security\TemporaryPasswordGenerator;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Event\AfterEntityPersistedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

/**
 * Lorsqu'une boutique est créée, un compte de gestionnaire est créé
 * automatiquement avec l'adresse e-mail de la boutique.
 *
 * Le mot de passe est généré aléatoirement puis envoyé au titulaire : il n'est
 * jamais codé en dur (voir CredentialsMailer pour la transmission).
 */
class ShopEventSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private UserPasswordHasherInterface $passwordHasher,
        private TemporaryPasswordGenerator $passwordGenerator,
        private CredentialsMailer $credentialsMailer
    ) {
    }

    public static function getSubscribedEvents()
    {
        return [
            AfterEntityPersistedEvent::class => ['createNewUserAfterShoCreation']
        ];
    }

    public function createNewUserAfterShoCreation(AfterEntityPersistedEvent $event)
    {
        $entity = $event->getEntityInstance();

        if (!($entity instanceof Boutique)) {
            return;
        }

        // Une boutique peut être recréée avec la même adresse : on ne crée pas
        // de doublon si un compte existe déjà pour cet e-mail.
        if ($this->entityManager->getRepository(User::class)->findOneBy(['email' => $entity->getEmail()])) {
            return;
        }

        $user = new User();
        $user->setEmail($entity->getEmail());
        $user->setShop($entity);

        $plainPassword = $this->passwordGenerator->generate();
        $user->setPassword(
            $this->passwordHasher->hashPassword($user, $plainPassword)
        );

        $this->entityManager->persist($user);
        $this->entityManager->flush();

        $this->credentialsMailer->send($user, $plainPassword);
    }
}
