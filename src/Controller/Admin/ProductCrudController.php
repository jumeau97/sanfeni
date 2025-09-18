<?php

namespace App\Controller\Admin;


use App\Controller\Admin\Field\VichFileField;
use App\Entity\Product;
use App\Entity\User;
use App\Form\AlbumType;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use phpDocumentor\Reflection\Types\Integer;


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

        $fields = [
            TextField::new('name')->setColumns('col-sm-6 col-md-6'),
            SlugField::new('slug')->setTargetFieldName('name')->setColumns('col-sm-6 col-md-6'),
            AssociationField::new('shop', 'Boutique')->onlyOnIndex(),
            MoneyField::new('price')->setCurrency('XOF')->hideWhenUpdating()->setColumns('col-sm-6 col-md-6'),
            MoneyField::new("promoPrice")->setCurrency('XOF')->onlyOnIndex(),
            AssociationField::new('categories')->autocomplete()->setFormTypeOptions([
                'multiple' => true
            ])->setColumns('col-sm-6 col-md-6'),
            TextEditorField::new('description'),
            VichFileField::new('imageFile')->onlyOnForms()->setColumns('col-sm-6 col-md-6'),
            CollectionField::new('albums')
                ->setEntryType(AlbumType::class)
                ->onlyOnForms()->setColumns('col-sm-6 col-md-6'),
            BooleanField::new('isPromotion', 'Enable Promotion')->onlyOnForms(),
            IntegerField::new('offPercent', 'Promo Price %')
                ->setFormTypeOption('required', false)
                ->setCssClass('promotion')
            ,
        ];

//        $product = $this->getContext()->getEntity()->getInstance();
//
//        if ($product->isPromotion()) {
//            dd($product);
//            $fields[] = MoneyField::new('promoPrice', 'Prix promotionnel')->setCurrency('EUR');
//        }

        return $fields;
    }

    public function configureAssets(Assets $assets): Assets
    {
        return $assets->addAssetMapperEntry('app');

    }


}
