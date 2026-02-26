<?php

namespace App\Form;

use App\Entity\Search;
use App\Request\Search\SearchProduct;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name');
//        ->add('saved', SubmitType::class);
//            ->add('submit', SubmitType::class, [
//                'label' => 'Filter',
//                'attr' => [
//                    'class' => 'btn btn-block btn-info'
//                ]
//            ]
//            );

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => SearchProduct::class,
            'method' => 'GET',
//            'crsf_protection' => false,
        ]);
    }
}
