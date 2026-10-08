<?php

namespace App\Form\Admin;

use App\Entity\Boutique;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;

/**
 * Compte utilisateur du back-office.
 *
 * Options :
 *   · with_roles  → affiche la sélection de rôles (admin uniquement ;
 *     un vendeur ne peut pas s'octroyer ROLE_ADMIN).
 *   · with_shop   → affiche le rattachement à une boutique (admin) ;
 *     un vendeur reste forcément rattaché à sa propre boutique.
 */
class AdminUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('firstName', TextType::class, [
                'label' => 'Prénom',
                'required' => false,
                'empty_data' => '',
                'attr' => ['placeholder' => 'Ex. Alassane'],
            ])
            ->add('lastName', TextType::class, [
                'label' => 'Nom',
                'required' => false,
                'empty_data' => '',
                'attr' => ['placeholder' => 'Ex. Sanogo'],
            ])
            ->add('email', TextType::class, [
                'label' => 'Adresse e-mail',
                'empty_data' => '',
                'constraints' => [
                    new NotBlank(['message' => "L'adresse e-mail est obligatoire."]),
                    new Email(['message' => 'Cette adresse e-mail n’est pas valide.']),
                ],
                'attr' => ['placeholder' => 'exemple@boutique.com', 'autocomplete' => 'off'],
            ])
            ->add('plainPassword', PasswordType::class, [
                'label' => 'Mot de passe',
                'required' => false,
                'help' => 'Laisser vide : un mot de passe provisoire est généré puis envoyé par e-mail. '
                    . 'Laisser vide lors d’une modification conserve le mot de passe actuel.',
                'attr' => ['autocomplete' => 'new-password'],
            ])
        ;

        if ($options['with_roles']) {
            $builder->add('roles', ChoiceType::class, [
                'label' => 'Rôles',
                'multiple' => true,
                'expanded' => true,
                'required' => false,
                'choices' => [
                    'Administrateur' => 'ROLE_ADMIN',
                    'Manager' => 'ROLE_MANAGER',
                    'Gérant de boutique' => 'ROLE_SHOP',
                    'Utilisateur' => 'ROLE_USER',
                ],
            ]);
        }

        if ($options['with_shop']) {
            $builder->add('shop', EntityType::class, [
                'label' => 'Boutique',
                'class' => Boutique::class,
                'choice_label' => 'name',
                'required' => false,
                'placeholder' => '— Aucune boutique —',
            ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'with_roles' => true,
            'with_shop' => true,
        ]);

        $resolver->setAllowedTypes('with_roles', 'bool');
        $resolver->setAllowedTypes('with_shop', 'bool');
    }
}
