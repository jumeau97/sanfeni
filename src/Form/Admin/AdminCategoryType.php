<?php

namespace App\Form\Admin;

use App\Entity\Category;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class AdminCategoryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom de la catégorie',
                'empty_data' => '',
                'constraints' => [new NotBlank(['message' => 'Le nom est obligatoire.'])],
                'attr' => ['placeholder' => 'Ex. Homme', 'autofocus' => true],
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'required' => false,
                'empty_data' => '',
                'attr' => ['rows' => 4, 'placeholder' => 'Description facultative…'],
            ])
            ->add('parentCateg', EntityType::class, [
                'label' => 'Catégorie parente',
                'class' => Category::class,
                'choice_label' => 'name',
                'required' => false,
                'placeholder' => '— Catégorie racine (aucun parent) —',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Category::class,
        ]);
    }
}
