<?php

namespace App\Form\Admin;

use App\Entity\Carrier;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class AdminCarrierType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom du transporteur',
                'empty_data' => '',
                'constraints' => [new NotBlank(['message' => 'Le nom est obligatoire.'])],
                'attr' => ['placeholder' => 'Ex. Livraison express', 'autofocus' => true],
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'empty_data' => '',
                'constraints' => [new NotBlank(['message' => 'La description est obligatoire.'])],
                'attr' => ['rows' => 3, 'placeholder' => 'Ex. Livraison sous 24h à Abidjan…'],
            ])
            ->add('price', NumberType::class, [
                'label' => 'Tarif (F CFA)',
                'required' => false,
                'constraints' => [new NotBlank(['message' => 'Le tarif est obligatoire.'])],
                'attr' => ['placeholder' => '0', 'min' => 0, 'step' => '0.01'],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Carrier::class,
        ]);
    }
}
