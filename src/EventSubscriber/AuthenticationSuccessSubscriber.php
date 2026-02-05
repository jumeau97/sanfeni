<?php

namespace App\EventSubscriber;

use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationFailureEvent;
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Exception\UserNotFoundException;
use Symfony\Component\Security\Core\User\UserInterface;

class AuthenticationSuccessSubscriber implements EventSubscriberInterface
{
    public function onLexikJwtAuthenticationOnAuthenticationSuccess(AuthenticationSuccessEvent $event): void
    {
        $data = $event->getData();
        $user = $event->getUser();

        if (!$user instanceof UserInterface) {
            return;
        }

        $data['status'] = 1;
        $data['id'] = $user->getId();
        $data['email'] = $user->getUserIdentifier();
        $data['roles'] = $user->getRoles();
        $event->setData($data);
    }

    public function onLexikJwtAuthenticationOnAuthenticationFailure(AuthenticationFailureEvent $event)
    {


        $data = [
            'status' => 0,
            'message'=>json_decode($event->getResponse()->getContent(), true)['message']
//            'message' => "Désolé, nous ne parvenons pas à identifier ce nom d'utilisateur
//                  ou ce mot de passe. Vous pouvez essayer à nouveau ou choisir de
//                  réinitialiser votre mot de passe.",
        ];


        $response = new JsonResponse($data, 401);
        $event->setResponse($response);
    }
    public static function getSubscribedEvents(): array
    {
        return [
            'lexik_jwt_authentication.on_authentication_success' => 'onLexikJwtAuthenticationOnAuthenticationSuccess',
            'lexik_jwt_authentication.on_authentication_failure' => 'onLexikJwtAuthenticationOnAuthenticationFailure',
        ];
    }
}
