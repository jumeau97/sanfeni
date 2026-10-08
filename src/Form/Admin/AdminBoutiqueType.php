<?php

namespace App\Form\Admin;

use App\Entity\Boutique;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;

class AdminBoutiqueType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom de la boutique',
                'empty_data' => '',
                'constraints' => [new NotBlank(['message' => 'Le nom est obligatoire.'])],
                'attr' => ['placeholder' => 'Ex. Sanfeni Store', 'autofocus' => true],
            ])
            ->add('proprietaire', TextType::class, [
                'label' => 'Propriétaire (nom complet)',
                'required' => false,
                'empty_data' => '',
                'attr' => ['placeholder' => 'Ex. Alassane Sanogo'],
            ])
            ->add('email', TextType::class, [
                'label' => 'E-mail de contact',
                'empty_data' => '',
                'help' => "Un compte de gestionnaire est créé automatiquement avec cette adresse lors de la création.",
                'constraints' => [
                    new NotBlank(['message' => "L'e-mail est obligatoire."]),
                    new Email(['message' => 'Cette adresse e-mail n’est pas valide.']),
                ],
                'attr' => ['placeholder' => 'contact@boutique.com'],
            ])
            ->add('phoneNumber', TextType::class, [
                'label' => 'Téléphone (boutique)',
                'required' => false,
                'empty_data' => '',
                'attr' => ['placeholder' => 'Ex. +225 07 00 00 00 00'],
            ])
            ->add('propPhoneNumber', TextType::class, [
                'label' => 'Téléphone (propriétaire)',
                'empty_data' => '',
                'constraints' => [new NotBlank(['message' => 'Le téléphone du propriétaire est obligatoire.'])],
                'attr' => ['placeholder' => 'Ex. +225 05 00 00 00 00'],
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'required' => false,
                'empty_data' => '',
                'attr' => ['rows' => 4, 'placeholder' => 'Présentation de la boutique…'],
            ])
            ->add('state', ChoiceType::class, [
                'label' => 'Statut',
                'choices' => [
                    'Actif' => 'actif',
                    'Suspendue' => 'suspendue',
                    'Inactif' => 'inactif',
                ],
                'required' => false,
                'placeholder' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Boutique::class,
        ]);
    }
}
