<?php

namespace App\Form;

use App\Entity\Album;
use App\Entity\Product;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class AlbumType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('imageFile', VichImageType::class,[
                'label' => false,
                'required' => false,
                'allow_delete' => true,
                'download_uri' => true,
                'asset_helper' => true,
            ])
//            ->add('illustration')
//            ->add('imageSize')
//            ->add('updatedAt', null, [
//                'widget' => 'single_text',
//            ])
//            ->add('product', EntityType::class, [
//                'class' => Product::class,
//                'choice_label' => 'id',
//            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Album::class,
        ]);
    }
}
