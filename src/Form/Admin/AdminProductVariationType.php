<?php

namespace App\Form\Admin;

use App\Entity\ProductAttributeValue;
use App\Entity\ProductVariation;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Une ligne de déclinaison d'un produit de type « variable ».
 *
 * Deux façons de composer la combinaison, cumulables :
 *
 *   · `attributes` — sélection des valeurs DÉJÀ en base (groupées par
 *     attribut : « Taille : M », « Couleur : Noir »…) ;
 *   · `newAttribute` + `newValue` (+ `newColor`) — création rapide d'une
 *     valeur inédite : l'attribut est créé au besoin côté contrôleur
 *     (@see \App\Controller\Admin\ProductController::resolveVariations()).
 *
 * Les champs de création rapide ne sont PAS mappés sur l'entité : ils ne
 * servent que pour la requête en cours.
 */
class AdminProductVariationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('attributes', EntityType::class, [
                'label' => 'Combinaison',
                'class' => ProductAttributeValue::class,
                'choice_label' => static fn (ProductAttributeValue $value): string => trim(
                    ($value->getAttribute()?->getName() ?: 'Option') . ' : ' . ($value->getValue() ?? '')
                ),
                'group_by' => static fn (ProductAttributeValue $value): string => trim(
                    (string) $value->getAttribute()?->getName()
                ) ?: 'Autres',
                'multiple' => true,
                'required' => false,
                'attr' => [
                    'size' => 6,
                    'class' => 'form-select admin-variation-combo',
                    'title' => 'Maintenez Cmd/Ctrl enfoncé pour sélectionner plusieurs valeurs.',
                ],
            ])
            ->add('price', NumberType::class, [
                'label' => 'Prix (F CFA)',
                'required' => false,
                'attr' => ['min' => 0, 'step' => '0.01', 'placeholder' => 'Prix du produit'],
            ])
            ->add('stock', IntegerType::class, [
                'label' => 'Stock',
                'required' => true,
                'empty_data' => 0,
                'attr' => ['min' => 0, 'placeholder' => '0'],
            ])
            // --- Création rapide d'une valeur (non mappé) ---------------
            ->add('newAttribute', TextType::class, [
                'label' => 'Attribut',
                'required' => false,
                'mapped' => false,
                'attr' => ['placeholder' => 'Ex. Taille'],
            ])
            ->add('newValue', TextType::class, [
                'label' => 'Valeur',
                'required' => false,
                'mapped' => false,
                'attr' => ['placeholder' => 'Ex. 2XL'],
            ])
            ->add('newColor', ColorType::class, [
                'label' => 'Couleur',
                'required' => false,
                'mapped' => false,
                'attr' => ['title' => 'Pastille de couleur (sélecteur de couleur)'],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ProductVariation::class,
            'label' => false,
        ]);
    }
}
