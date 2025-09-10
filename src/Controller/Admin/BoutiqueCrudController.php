<?php

namespace App\Controller\Admin;

use App\Entity\Boutique;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class BoutiqueCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Boutique::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name')->setLabel('Nom')->setColumns('col-md-6 col-sm-6'),
            TextField::new('email')->setLabel('Adresse e-mail')->setColumns('col-md-6 col-sm-6'),
            TextField::new('phoneNumber')->setLabel('Numero portable')->setColumns('col-md-6 col-sm-6'),
            TextField::new('proprietaire')->setLabel('Nom complet(promoteur)')->setColumns('col-md-6 col-sm-6'),
            TextField::new('propPhoneNumber')->setLabel('Contact du proprietaire')->setColumns('col-md-6 col-sm-6'),
            TextEditorField::new('description')->setLabel('Description de la boutique'),
        ];
    }

}
