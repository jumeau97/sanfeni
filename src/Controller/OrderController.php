<?php

namespace App\Controller;

use App\Entity\Order;
use App\Entity\OrderDetails;
use App\Form\OrderType;
use App\Form\PaymentMethodType;
use App\Model\Cart;
use App\Payload\Utils\GlobalResponse;
use App\Payload\Utils\UtilisService;
use App\Request\Search\SearchOrder;
use App\Service\Order\OrderInterface;
use App\Service\Product\ProductInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

final class OrderController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SerializerInterface $serializer,
        private OrderInterface $orderInterface,
        private UtilisService $utilisService,
    )
    {
    }

    #[Route('/commande', name: 'app_order')]
    public function index(Cart $cart): Response
    {
        if (!$this->getUser()->getAddresses()->getValues()) {
            return $this->redirectToRoute('app_account_address');
        }
        $form = $this->createForm(OrderType::class, null, [
            'user' => $this->getUser()
        ]);


        return $this->render('order/index.html.twig', [
            'form' => $form,
            'cart' => $cart->getFull()
        ]);
    }

    #[Route('/commande/recapitulatif', name: 'app_order_recap', methods: ['POST'])]
    public function add(Cart $cart, Request $request): Response
    {

        $form = $this->createForm(OrderType::class, null, [
            'user' => $this->getUser()
        ]);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $date = new \DateTimeImmutable();
            $carriers = $form->get('carriers')->getData();
            $delivery = $form->get('adresses')->getData();
            $delivery_content = $delivery->getFirstName() . '' . $delivery->getlastName();
            $delivery_content .= '<br>' . $delivery->getPhone();
            if ($delivery->getCompany()) {
                $delivery_content .= '<br>' . $delivery->getCompany();
            }

            $delivery_content .= '<br>' . $delivery->getAddress();
            $delivery_content .= '<br>' . $delivery->getCity();
            $delivery_content .= '<br>' . $delivery->getCountry();

            //Enregistrer la commande
            $order = new Order();
            $reference = $date->format('dmY') . '-' . uniqid();
            $order->setReference($reference);
            $order->setUser($this->getUser());
            $order->setCreatedAt($date);
            $order->setCarrierName($carriers->getName());
            $order->setCarrierPrice($carriers->getPrice());
            $order->setDelivery($delivery_content);
//            $order->setIsPaid(false);
            $order->setState(1);
//            dd($order);
            $this->entityManager->persist($order);


            foreach ($cart->getFull() as $product) {
                $orderDetails = new OrderDetails();
                $orderDetails->setCommande($order);
                $orderDetails->setProduct($product['product']->getName());
                $orderDetails->setProduit($product['product']);
                $orderDetails->setQuantity($product['quantity']);
                $orderDetails->setState(0);
                $price = $product['product']->getPrice(); // Prix brut (en centimes ?)

                if ($product['product']->getOffPercent() > 0) {
                    // Appliquer la réduction
                    $price = $price * (1 - ($product['product']->getOffPercent() / 100));
                }
                $orderDetails->setPrice($price);
                $orderDetails->setTotal($product['product']->getPrice() * $product['quantity']);
                $this->entityManager->persist($orderDetails);

            }


            $this->entityManager->flush();
//            dd($order->getReference());

            return $this->render('order/add.html.twig', [
                'cart' => $cart->getFull(),
                'carrier' => $carriers,
                'delivery' => $delivery_content,
                'reference' => $order->getReference(),
                'form' => $this->createForm(PaymentMethodType::class)->createView()
            ]);

        }
        return $this->redirectToRoute('cart');
    }

    #[Route('/dashboard/commande', name: 'dashboard_commande')]
    public function findAll(Request $request): Response
    {
        $pageNumb = $request->query->getInt('page', 1);
        $limit = $request->query->getInt('limit', 50);
        $data = $this->serializer->deserialize($request->getContent(), SearchOrder::class, 'json');

        $result = $this->orderInterface->findAllByCriteria($pageNumb, $limit, $data);

        $jsonData = $this->serializer->serialize($result, 'json', ["groups" => "getOrder"]);
        $dataArray = json_decode($jsonData, true);
        $array = $this->utilisService->paginationResp($dataArray, $result, $limit);
        return GlobalResponse::successWith("La liste des commandes", $array);
    }
}
