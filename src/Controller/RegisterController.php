<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegisterType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

final class RegisterController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager
    )
    {
    }

    #[Route('/register', name: 'register_customer')]
    public function index(
        Request                     $request,
        UserPasswordHasherInterface $passwordHasher,
        SessionInterface            $session,
        Security                    $security
    ): Response
    {
        $user = new User();

        $form = $this->createForm(RegisterType::class, $user);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();
            $user->setRoles(['ROLE_CUSTOMER']);
            $password = $passwordHasher->hashPassword(
                $user,
                $user->getPassword()
            );
            $user->setPassword($password);
            $this->entityManager->persist($user);
            $this->entityManager->flush();

            return $security->login($user, 'form_login', 'main');

//
//            $token = new UsernamePasswordToken($user,  'main', $user->getRoles());
//            $this->container->get('security.token_storage')->setToken($token);
//            $session->set('_security_main', serialize($token));

//        return $this->redirectToRoute('app_home');
        }
        return $this->render('register/signup.html.twig', ['form' => $form,]);
    }
}
