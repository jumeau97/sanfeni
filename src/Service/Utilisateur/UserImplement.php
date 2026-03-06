<?php

namespace App\Service\Utilisateur;

use App\Payload\SearchRequest\SearchProduct;
use App\Payload\Utils\UtilisService;
use App\Repository\CategoryRepository;
use App\Repository\ProductRepository;
use App\Repository\UserRepository;
use App\Request\Search\SearchCategory;
use App\Request\Search\SearchUser;
use App\Service\Category\CategoryInterface;
use App\Service\Product\ProductInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;

class UserImplement implements UserInterface
{

    public function __construct(
        private UtilisService   $utilisService,
        private UserRepository  $userRepository,
        private MailerInterface $mailer

    )
    {
    }


    public function findAllByCriteria($pageNumber, $limit, SearchUser $data)
    {
        return $this->utilisService->ToPaginate($pageNumber, $limit, $this->userRepository->findAllByCriteria($data, $pageNumber, $limit));
    }

    public function sendingEmailTo(array $to, string $subject, ?array $context, string $template): void
    {
        $email = (new TemplatedEmail())
            ->from(new Address('contact@sanfeni.com'))
            ->to(...$to)
//            ->cc('cc@example.com')
            //->bcc('bcc@example.com')
            //->replyTo('fabien@example.com')
//            ->priority(Email::PRIORITY_HIGH)
            ->subject($subject)
            ->context($context)
            ->htmlTemplate($template);

        $this->mailer->send($email);
    }
}
