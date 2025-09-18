<?php

namespace App\Form;

use App\Entity\Address;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AddressType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
//            ->add('name')
            ->add('firstName', TextType::class,[
                'attr'=>[
                    'placeholder'=>'Votre Prénom',
                    'class'=>'m-2'
                ]
            ])
            ->add('lastName', TextType::class, [
                'attr'=>[
                    'placeholder'=>'Votre Nom',
                    'class'=>'m-2'
                ]
            ])
            ->add('company', TextType::class,[
                'attr'=>[
                    'placeholder'=>'Votre société',
                    'class'=>'m-2'
                ]
            ])
            ->add('address', TextType::class,[
                'attr'=>[
                    'placeholder'=>'Votre adresse',
                    'class'=>'m-2'
                ]
            ])
            ->add('city',  TextType::class,[
                'attr'=>[
                    'placeholder'=>'Ville',
                    'class'=>'m-2'
                ]
            ])
            ->add('country', TextType::class,[
                'attr'=>[
                    'placeholder'=>'Pays',
                    'class'=>'m-2'
                ]
            ])
            ->add('phone', TextType::class,[
                'attr'=>[
                    'placeholder'=>'Votre numéro portable',
                    'class'=>'m-2'
                ]
            ])
            ->add('submit', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Address::class,
        ]);
    }
}
