<?php

namespace App\Controller\Admin;


use App\Controller\Admin\Field\VichFileField;
use App\Controller\Admin\Field\VichFileFieldMultiple;
use App\Entity\Boutique;
use App\Entity\Product;
use App\Entity\User;
use App\Form\AlbumType;
use App\Form\ProductVariationType;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\TypeInfo\Type\CollectionType;
use Vich\UploaderBundle\Form\Type\VichImageType;


class ProductCrudController extends AbstractCrudController
{
    public function __construct(private EntityManagerInterface $entityManager)
    {
    }

    public static function getEntityFqcn(): string
    {
        return Product::class;
    }

    public function createEntity(string $entityFqcn)
    {
        $product = new Product();
        /** @var User $user */
        $user = $this->getUser();

        if ($user && $user->getShop()) {
            $product->setShop($user->getShop());
        }

        return $product;
    }


    public function configureFields(string $pageName): iterable
    {


        return [
            TextField::new('name')->setColumns('col-sm-6 col-md-6'),
            SlugField::new('slug')->setTargetFieldName('name')->setColumns('col-sm-6 col-md-6'),
            AssociationField::new('shop', 'Boutique')->onlyOnIndex(),
            MoneyField::new('price')->setCurrency('XOF')->hideWhenUpdating()->setColumns('col-sm-6 col-md-6'),
            AssociationField::new('categories')->autocomplete()->setFormTypeOptions([
                'multiple' => true
            ])->setColumns('col-sm-6 col-md-6'),
            TextEditorField::new('description'),
            VichFileField::new('imageFile')->onlyOnForms()->setColumns('col-sm-6 col-md-6'),
            CollectionField::new('albums')
                ->setEntryType(AlbumType::class)
                ->onlyOnForms()->setColumns('col-sm-6 col-md-6'),


        ];
    }

}
