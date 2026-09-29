<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Security\CredentialsMailer;
use App\Security\TemporaryPasswordGenerator;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserCrudController extends AbstractCrudController
{
    public function __construct(
        private UserPasswordHasherInterface $passwordHasher,
        private TemporaryPasswordGenerator $passwordGenerator,
        private CredentialsMailer $credentialsMailer
    ) {
    }

    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        // Champ laissé vide : mot de passe provisoire généré puis envoyé par e-mail.
        $this->applyPassword($entityInstance);

        $entityManager->persist($entityInstance);
        $entityManager->flush();

        $this->credentialsMailer->send($entityInstance, $entityInstance->getPlainPassword());
        // Le mot de passe en clair ne doit pas survivre à la requête.
        $entityInstance->setPlainPassword(null);
        $entityManager->flush();
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        // Champ laissé vide : on conserve le mot de passe actuel.
        if ($entityInstance->getPlainPassword()) {
            $this->applyPassword($entityInstance);

            $entityManager->persist($entityInstance);
            $entityManager->flush();

            $this->credentialsMailer->send($entityInstance, $entityInstance->getPlainPassword());
        }

        $entityInstance->setPlainPassword(null);
        $entityManager->flush();
    }

    private function applyPassword(User $user): void
    {
        if (!$user->getPlainPassword()) {
            $user->setPlainPassword($this->passwordGenerator->generate());
        }

        $user->setPassword(
            $this->passwordHasher->hashPassword($user, $user->getPlainPassword())
        );
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
            AssociationField::new('shop')->autocomplete(),
            TextField::new('plainPassword')
                ->setLabel('Mot de passe')
                ->setFormType(PasswordType::class)
                ->setFormTypeOptions([
                    'mapped' => true,
                    'required' => false,
                    'attr' => ['autocomplete' => 'new-password'],
                ])
                ->setHelp('Laisser vide : un mot de passe provisoire est généré et envoyé par e-mail. Le champ vide lors d\'une modification conserve le mot de passe actuel.')
                ->onlyOnForms(),
        ];
    }
}
