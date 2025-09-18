<?php

namespace App\Controller;

use App\Entity\Address;
use App\Form\AddressType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class AccountAddressController extends AbstractController
{
    #[Route('/account/address', name: 'app_account_address')]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {

        //        formulaire d'adresse
        $address = new Address();
        $form = $this->createForm(AddressType::class, $address);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $address = $form->getData();
            $address->setUser($this->getUser());
            $entityManager->persist($address);
            $entityManager->flush();
            return $this->redirectToRoute('app_account_address');
        }
        return $this->render('account/address.html.twig', [
            'form' => $form,
            'addresses' => $this->getUser()->getAddresses()
        ]);
    }
}
