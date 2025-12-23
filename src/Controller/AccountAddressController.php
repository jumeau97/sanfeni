<?php

namespace App\Controller;

use App\Entity\Address;
use App\Form\AddressType;
use App\Model\Cart;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class AccountAddressController extends AbstractController
{
    #[Route('/account/address', name: 'app_account_address')]
    public function index(Cart $cart, Request $request, EntityManagerInterface $entityManager): Response
    {

        //formulaire d'adresse
        $address = new Address();
        $form = $this->createForm(AddressType::class, $address);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $address = $form->getData();
            $address->setUser($this->getUser());
            $entityManager->persist($address);
            $entityManager->flush();
            if ($cart->get()) {
                return $this->redirectToRoute('app_order');
            }
//            else {
//
//            }
            return $this->redirectToRoute('app_account_address');
        }
        return $this->render('account/address.html.twig', [
            'form' => $form,
            'addresses' => $this->getUser()->getAddresses()
        ]);
    }

    #[Route('/account/add-address', name: 'account_add_address')]
    public function addNewAddress(Cart $cart, Request $request, EntityManagerInterface $entityManager){
        //formulaire d'adresse
        $address = new Address();
        $form = $this->createForm(AddressType::class, $address);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $address = $form->getData();
            $address->setUser($this->getUser());
            $entityManager->persist($address);
            $entityManager->flush();
            if ($cart->get()) {
                return $this->redirectToRoute('app_order');
            }
//            else {
//
//            }
            return $this->redirectToRoute('app_account_address');
        }
        return $this->render('account/address-add.html.twig', [
            'form' => $form,
            'addresses' => $this->getUser()->getAddresses()
        ]);
    }

    #[Route('/account/edit-address/{id}', name: 'account_edit_address')]
    public function edit(Cart $cart, Request $request, $id, EntityManagerInterface $entityManager): Response
    {

        //formulaire d'adresse
        $address = $entityManager->getRepository(Address::class)->findOneBy(['id' => $id]);

        if (!$address || $address->getUser() != $this->getUser()) {
            return $this->redirectToRoute('app_account_address');
        }
        $form = $this->createForm(AddressType::class, $address);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $address = $form->getData();
            $address->setUser($this->getUser());
            $entityManager->persist($address);
            $entityManager->flush();
            if ($cart->get()) {
                return $this->redirectToRoute('app_order');
            }
//            else {
//
//            }
            return $this->redirectToRoute('app_account_address');
        }
        return $this->render('account/address.html.twig', [
            'form' => $form,
            'addresses' => $this->getUser()->getAddresses()
        ]);
    }
}
