<?php

namespace App\EventSubscriber;

use App\Entity\Boutique;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Event\AfterEntityPersistedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class ShopEventSubscriber implements EventSubscriberInterface
{

    public function __construct(
        private EntityManagerInterface $entityManager,
        private UserPasswordHasherInterface $passwordHasher
    )
    {

    }

    public static function getSubscribedEvents()
    {
        return [
            AfterEntityPersistedEvent::class=>['createNewUserAfterShoCreation']
        ];
    }

    public function createNewUserAfterShoCreation(AfterEntityPersistedEvent $event)
    {
        $entity = $event->getEntityInstance();

        if (!($entity instanceof Boutique)) {
            return;
        }

        $user = new User();
        $user->setEmail($entity->getEmail());
        $user->setShop($entity);
        $hashedPassword = $this->passwordHasher->hashPassword(
            $user,
            '12345678'
        );
        $user->setPassword($hashedPassword);
        $this->entityManager->persist($user);
        $this->entityManager->flush();

    }
}
