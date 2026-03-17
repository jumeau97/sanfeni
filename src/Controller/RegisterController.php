<?php

namespace App\Controller;

use App\Entity\Boutique;
use App\Entity\User;
use App\Form\RegisterType;
use App\Payload\Utils\GlobalResponse;
use App\Payload\Utils\UtilisService;
use App\Request\Search\SearchUser;
use App\Request\UserRequest;
use App\Service\Utilisateur\UserInterface;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

final class RegisterController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SerializerInterface    $serializer,
        private ValidatorInterface     $validator,
        private UserInterface          $userInterface,
        private UtilisService          $utilisService,
        private MailerInterface        $mailer
    )
    {
    }

    #[Route('/send-email', name: 'sending_email_to_bstp')]
    public function send(Request $request): Response
    {
        try {
            $data = json_decode($request->getContent(), true);

            $this->userInterface->sendingEmailFromToBstp([$data['from']], $data['subject'], $data['message']);
        } catch (\Exception $exception) {
            return GlobalResponse::error("Une erreur est survenue", $exception->getMessage());
        }

        return GlobalResponse::success("Votre e-mail a bien été envoyé à BSTP-MALI. Nous le prendrons en charge et reviendrons vers vous dans les plus brefs délais.");
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

            try {
                //send email
                $this->userInterface->sendingEmailTo(
                    [new Address($user->getEmail())],
                    'Nouvelle inscription',
                    ['user' => $user],
                    'register/register_email.html.twig'
                );


            } catch (\Exception $exception) {
//                return GlobalResponse::success("Compte créé. Vérifiez vos e-mails (y compris spam) ou contactez l’administrateur $exception");
            }


            return $security->login($user, 'form_login', 'main');

//
//            $token = new UsernamePasswordToken($user,  'main', $user->getRoles());
//            $this->container->get('security.token_storage')->setToken($token);
//            $session->set('_security_main', serialize($token));

//        return $this->redirectToRoute('app_home');
        }
        return $this->render('register/signup.html.twig', ['form' => $form,]);
    }


    #[Route('/dashboard/list-utilisateur', name: 'dashboard_list_utilisateurs')]
    public function findAll(Request $request): Response
    {
        $pageNumb = $request->query->getInt('page', 1);
        $limit = $request->query->getInt('limit', 50);
        $data = $this->serializer->deserialize($request->getContent(), SearchUser::class, 'json');

        $result = $this->userInterface->findAllByCriteria($pageNumb, $limit, $data);

        $jsonData = $this->serializer->serialize($result, 'json', ["groups" => "getUsers"]);
        $dataArray = json_decode($jsonData, true);
        $array = $this->utilisService->paginationResp($dataArray, $result, $limit);
        return GlobalResponse::successWith("La liste des utilisateurs", $array);
    }

    #[Route("/dashboard/add-utilisateur", name: 'dashboard_add_user')]
    public function add(Request $request, UserPasswordHasherInterface $passwordHasher,): Response
    {
        try {
            $data = $this->serializer->deserialize($request->getContent(), UserRequest::class, 'json');

            $errors = $this->validator->validate($data);
            if ($errors->count() > 0) {
                $errorMessages = [];
                foreach ($errors as $error) {
                    $errorMessages[] = $error->getMessage();
                }
                return GlobalResponse::errorWith("erreur", $errorMessages);
            }

            $shop = $this->entityManager->getRepository(Boutique::class)->findOneBy(["id" => $data->getShop()]);

            $user = new User();
            $user->setLastName($data->getLastName())
                ->setFirstName($data->getFirstName())
                ->setEmail($data->getEmail())
                ->setShop($shop)
                ->setRoles($data->getRoles());
            $password = $passwordHasher->hashPassword(
                $user,
                "12345678"
            );
            $user->setPassword($password);


            $this->entityManager->persist($user);
            $this->entityManager->flush();

            try {
                //send email
                $this->userInterface->sendingEmailTo(
                    [new Address($user->getEmail())],
                    'Création de boutique',
                    ['user' => $user, 'plainPassword' => '12345678'],
                    'register/register_shop_email.html.twig'
                );


            } catch (\Exception $exception) {
                return GlobalResponse::success("Compte créé. Vérifiez vos e-mails (y compris spam) ou contactez l’administrateur $exception");
            }
        } catch (UniqueConstraintViolationException $exception) {
            return GlobalResponse::error("Cet utilisateur existe déjà");

        }

        return GlobalResponse::success("Utilisateur enregistrée avec succès");
    }
}
