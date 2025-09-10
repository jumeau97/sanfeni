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

class RegisterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('lastName', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Nom'
                ]
            ])
            ->add('firstName', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Prénom'
                ]])
            ->add('email', EmailType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Adresse e-mail'
                ]])
            ->add('save', SubmitType::class, [
                'attr' => ['class' => 'shop-btn'],
            ])->add('password', RepeatedType::class, [
                'type' => PasswordType::class,
                'invalid_message' => 'Les mot de passe ne correspondent pas',
                'required' => true,
                'first_options' => [
                    'label'=>false,
                    'attr' => [
                        'placeholder' => 'Merci de saisir votre mot de passe',
                        'class' => 'form-control'
                    ]],
                'second_options' => [
                    'label'=>false,
                    'attr' => [
                        'placeholder' => 'Merci de saisir votre mot de passe de confirmation',
                        'class' => 'form-control'
                    ]],
            ]);

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
