<?php

namespace App\Form;

use App\Entity\Boutique;
use App\Entity\Category;
use App\Entity\Product;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
//            ->add('slug')
            ->add('price')
            ->add('isPromotion', CheckboxType::class, [
                'label' => 'En promotion?',
            ])
            ->add('categories', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'name',
                'multiple' => true,
                'expanded' => true,
            ])
            ->add('description')
            ->add('illustration', AlbumType::class, [
                'label' => 'Illustration',

            ])
            ->add('offPercent')
            ->add('shop', EntityType::class, [
                'class' => Boutique::class,
                'choice_label' => 'name',
            ])
            ->add('albums', CollectionType::class, [
                'label' => false,
                'entry_type' => AlbumType::class,
                'allow_add' => true,
                'allow_delete' => true,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
        ]);
    }
}
