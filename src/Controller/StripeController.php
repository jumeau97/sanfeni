<?php

namespace App\Controller;

use App\Entity\Order;
use App\Entity\Product;
use App\Form\PaymentMethodType;
use App\Model\Cart;
use Doctrine\ORM\EntityManagerInterface;
use Stripe\Checkout\Session;
use Stripe\Stripe;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class StripeController extends AbstractController
{
    #[Route('/commande/create-session/{reference}', name: 'stripe_create_session')]
    public function index(EntityManagerInterface $entityManager, Cart $cart, $reference, Request $request)
    {


        $order = $entityManager->getRepository(Order::class)->findOneBy(['reference' => $reference]);

        if (!$order) {

        }

        $payMethodForm = $this->createForm(PaymentMethodType::class);
        $payMethodForm->handleRequest($request);

//        dump($payMethodForm->getErrors(true));
//        dd($payMethodForm->getData());

        if ($payMethodForm->isSubmitted() && $payMethodForm->isValid()) {

            switch ($payMethodForm->get('payMethod')->getData()) {
                case 'CREDIT_CARD':
                {
                    return $this->creditCardPayment($entityManager, $order);
//                    dd($payMethodForm->get('payMethod')->getData());
                }
                case 'PAY_ON_DELIVERY':
                {
                    return $this->redirectToRoute('app_order_pay_on_delivery', ['reference' => $reference]);

                }

            }

        }

//        $response = new JsonResponse(['id' => $checkout_session->id]);

//        return $response;
    }


    public function creditCardPayment($entityManager, $order)
    {
        $YOUR_DOMAIN = $_ENV['YOUR_DOMAIN'];
        $product_for_stripe = [];

        foreach ($order->getOrderDetails()->getValues() as $product) {

            $product_object = $entityManager->getRepository(Product::class)->findOneBy(["name" => $product->getProduct()]);

            $product_for_stripe[] = [
                'price_data' => [
                    'currency' => 'XOF',
                    'unit_amount' => $product->getPrice() / 100,
                    'product_data' => [
                        'name' => $product->getProduct(),
                        'images' => [$YOUR_DOMAIN . "/uploads" . $product_object->getIllustration()]
                    ]
                ],
                'quantity' => $product->getQuantity(),
            ];
        }

        $product_for_stripe[] = [
            'price_data' => [
                'currency' => 'XOF',
                'unit_amount' => $order->getCarrierPrice(),
                'product_data' => [
                    'name' => $order->getCarrierName(),
                    'images' => [$YOUR_DOMAIN . "/uploads" . $product_object->getIllustration()]
                ]
            ],
            'quantity' => 1,
        ];
//        dd($product_for_stripe);
        $stripeSecretKey = $_ENV['STRIPE_SECRET_KEY'];

        Stripe::setApiKey($stripeSecretKey);

        $checkout_session = Session::create([
            'customer_email' => $this->getUser()->getEmail(),
            'line_items' => [[
                $product_for_stripe
            ]],
            'mode' => 'payment',
            'success_url' => $YOUR_DOMAIN . '/commande/merci/{CHECKOUT_SESSION_ID}',
            'cancel_url' => $YOUR_DOMAIN . '/commande/erreur/{CHECKOUT_SESSION_ID}',
        ]);

        $order->setStripeSessionId($checkout_session->id);
        $entityManager->flush();
        return $this->redirect($checkout_session->url);
    }


}
