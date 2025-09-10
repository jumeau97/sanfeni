<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\PasswordHasher\PasswordHasherInterface;

class UserCrudController extends AbstractCrudController
{
    public function __construct(private UserPasswordHasherInterface $passwordHasher)
    {
    }

    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function createEntity(string $entityFqcn)
    {
        $user = new User();
        // Générer un mot de passe aléatoire (12 caractères par ex.)
        $plainPassword = bin2hex(random_bytes(6));

        // Hasher le mot de passe
        $hashedPassword = $this->passwordHasher->hashPassword($user, $plainPassword);

        $user->setPassword($hashedPassword);


        return $user;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('firstName')->setColumns('col-md-6 col-sm-6'),
            TextField::new('lastName')->setColumns('col-md-6 col-sm-6'),
            TextField::new('email')->setColumns('col-md-6 col-sm-6'),
            ChoiceField::new('roles')
                ->setChoices([
                    'Administrateur' => 'ROLE_ADMIN',
                    'Manager' => 'ROLE_MANAGER',
                    'Utilisateur' => 'ROLE_USER',
                ])

                ->allowMultipleChoices()
                ->renderExpanded()
                ->onlyOnForms(),
            ArrayField::new('roles')->onlyOnIndex(),
            AssociationField::new('shop')->autocomplete()

        ];
    }

}
