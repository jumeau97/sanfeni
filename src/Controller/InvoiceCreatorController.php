<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;


final class InvoiceCreatorController extends AbstractController
{
    #[Route('/invoice/creator', name: 'app_invoice_creator')]
    public function index(): Response
    {
        return $this->render('invoice_creator/index.html.twig', [
            'controller_name' => 'InvoiceCreatorController',
        ]);
    }
}
