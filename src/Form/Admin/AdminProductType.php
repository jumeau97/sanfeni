<?php

namespace App\Form\Admin;

use App\Entity\Category;
use App\Entity\Product;
use App\Form\AlbumType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Vich\UploaderBundle\Form\Type\VichImageType;

/**
 * Formulaire produit du back-office sur mesure.
 *
 * Options :
 *   · with_shop = false → le champ « boutique » est retiré du formulaire,
 *     le contrôleur force alors la boutique du vendeur connecté (impossible
 *     de créer un produit pour quelqu'un d'autre).
 *   · with_shop = true  → l'administrateur choisit la boutique.
 */
class AdminProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom du produit',
                'empty_data' => '',
                'constraints' => [new NotBlank(message: 'Le nom du produit est obligatoire.')],
                'attr' => ['placeholder' => 'Ex. Robe wax élégante', 'autofocus' => true],
            ])
            ->add('slug', TextType::class, [
                'label' => 'Slug (URL)',
                'required' => false,
                'empty_data' => '',
                'help' => "Laissez vide : il sera généré automatiquement à partir du nom.",
                'attr' => ['placeholder' => 'robe-wax-elegante'],
            ])
            ->add('price', NumberType::class, [
                'label' => 'Prix (F CFA)',
                'required' => false,
                'constraints' => [new NotBlank(message: 'Le prix est obligatoire.')],
                'attr' => ['placeholder' => '0', 'min' => 0, 'step' => '0.01'],
            ])
            ->add('categories', EntityType::class, [
                'label' => 'Catégories',
                'class' => Category::class,
                'choice_label' => 'name',
                'multiple' => true,
                'expanded' => false,
                'required' => false,
                'placeholder' => '— Choisir des catégories —',
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'required' => false,
                'empty_data' => '',
                'attr' => ['rows' => 5, 'placeholder' => 'Description visible sur la fiche produit…'],
            ])
            ->add('type', ChoiceType::class, [
                'label' => 'Type de produit',
                'choices' => [
                    'Simple' => Product::TYPE_SIMPLE,
                    'Variable (déclinaisons)' => Product::TYPE_VARIABLE,
                    'Groupé' => Product::TYPE_GROUPED,
                ],
                'placeholder' => false,
                'help' => 'Un produit « Simple » ou « Groupé » ne conserve aucune déclinaison.',
            ])
            ->add('stock', IntegerType::class, [
                'label' => 'Stock (produit simple)',
                'required' => false,
                'help' => 'Vide = stock non géré. 0 = rupture de stock. '
                    . 'Pour un produit variable, le stock se renseigne déclinaison par déclinaison.',
                'attr' => ['min' => 0, 'placeholder' => 'Ex. 25'],
            ])
            ->add('state', ChoiceType::class, [
                'label' => 'Visibilité',
                'choices' => ['Actif' => 'actif', 'Inactif' => 'inactif'],
                'required' => false,
                'placeholder' => false,
            ])
            ->add('isPromotion', CheckboxType::class, [
                'label' => 'Mettre ce produit en promotion',
                'required' => false,
            ])
            ->add('offPercent', IntegerType::class, [
                'label' => 'Remise (%)',
                'required' => false,
                'attr' => ['min' => 0, 'max' => 100, 'placeholder' => 'Ex. 20'],
            ])
            ->add('imageFile', VichImageType::class, [
                'label' => 'Image principale',
                'required' => false,
                'allow_delete' => true,
                'delete_label' => 'Supprimer l’image',
                'download_uri' => false,
                'asset_helper' => true,
            ])
            ->add('albums', CollectionType::class, [
                'label' => 'Galerie photos',
                'entry_type' => AlbumType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'required' => false,
            ])
            ->add('productVariations', CollectionType::class, [
                'label' => 'Déclinaisons',
                'entry_type' => AdminProductVariationType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'required' => false,
                // Les erreurs (« ajoutez au moins une déclinaison »…) restent
                // affichées dans le champset dédié du formulaire.
                'error_bubbling' => false,
            ])
        ;

        if ($options['with_shop']) {
            $builder->add('shop', EntityType::class, [
                'label' => 'Boutique propriétaire',
                'class' => \App\Entity\Boutique::class,
                'choice_label' => 'name',
                'required' => false,
                'placeholder' => '— Aucune boutique —',
            ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
            'with_shop' => true,
        ]);

        $resolver->setAllowedTypes('with_shop', 'bool');
    }
}
