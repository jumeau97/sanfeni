<?php

namespace App\Form;

use App\Entity\Boutique;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ChangePasswordType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class, [
                'disabled' => true
            ])
            ->add('firstname', TextType::class, [
                'disabled' => true,
                'label' => 'Votre nom'
            ])
            ->add('lastname', TextType::class, [
                'disabled' => true,
                'label' => 'Votre prénom'
            ])
            ->add('old_password', PasswordType::class, [
                'mapped' => false,
                'label' => 'Votre mot de passe actuel',
                'attr' =>[
                    'placeholder' => 'Entrez votr mot de passe actuel'
                ]
            ])
            ->add('new_password', RepeatedType::class, [
                'type' => PasswordType::class,
                'mapped' => false,
                'invalid_message' => 'Les mot de passe ne correspondent pas',
                'label' => 'Votre nouveau mot de passe',
                'required' => true,
                'first_options' => ['label' => 'Votre nouveau mot de passe',
                    'attr' => [
                        'placeholder' => 'Merci de saisir votre nouveau mot de passe'
                    ]],
                'second_options' => ['label' => 'Confirmez votre nouveau mot de passe',
                    'attr' => [
                        'placeholder' => 'Merci de saisir votre nouveau mot de passe de confirmation'
                    ]],
            ])
            ->add('submit', SubmitType::class,
                ['label' => 'Mettre a jour'])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
