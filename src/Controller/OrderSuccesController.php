<?php

namespace App\Controller;

use App\Entity\Order;
use App\Model\Cart;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class OrderSuccesController extends AbstractController
{

    public function __construct(
        private EntityManagerInterface $entityManager
    )
    {
    }

    #[Route('/commande/merci/{stripeSessionId}', name: 'app_order_validate')]
    public function index(Cart $cart, $stripeSessionId): Response
    {
        $order = $this->entityManager->getRepository(Order::class)->findOneBy(['stripeSessionId' => $stripeSessionId]);
        if (!$order || $order->getUser() != $this->getUser()) {
            return $this->redirectToRoute('app_home');
        }
//        vider le panier
        $cart->remove();

        if (!$order->isPaid()) {
            //vider la session

//            $order->setIsPaid(1);
            $order->setState(1); //paiement effectué
            $this->entityManager->flush();

            //envoyer un email au client
        }
        return $this->render('order_success/index.html.twig', [
                'order' => $order
            ]
        );
    }


    #[Route('/commande/pay-on-delivery/{reference}', name: 'app_order_pay_on_delivery')]
    public function payOnDelivery(Cart $cart, $reference): Response
    {
        $order = $this->entityManager->getRepository(Order::class)->findOneBy(['reference' => $reference]);
        if (!$order || $order->getUser() != $this->getUser()) {
            return $this->redirectToRoute('app_home');
        }
//        vider le panier
        $cart->remove();

        if (!$order->isPaid()) {
            //vider la session

            $order->setIsPaid(1);
            $this->entityManager->flush();

            //envoyer un email au client
        }
        return $this->render('order_success/pay_on_delivery.html.twig', [
                'order' => $order
            ]
        );
    }
}
