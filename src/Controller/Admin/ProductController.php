<?php

namespace App\Controller\Admin;

use App\Entity\Boutique;
use App\Entity\Category;
use App\Entity\Product;
use App\Entity\ProductAttribute;
use App\Entity\ProductAttributeValue;
use App\Entity\ProductVariation;
use App\Form\Admin\AdminProductType;
use App\Service\Admin\AdminScope;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\QueryBuilder;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\Form\FormError;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\String\Slugger\AsciiSlugger;

/**
 * CRUD Produits — chaque vendeur ne voit et ne gère QUE ses produits.
 */
#[Route('/admin/produits', name: 'admin_product_')]
final class ProductController extends AbstractAdminController
{
    public function __construct(
        AdminScope $scope,
        EntityManagerInterface $entityManager,
        PaginatorInterface $paginator,
    ) {
        parent::__construct($scope, $entityManager, $paginator);
    }

    #[Route('', name: 'index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        $this->guard();

        $qb = $this->createListQueryBuilder();

        // --- Filtres (liste filtrable) ---
        $q = trim((string) $request->query->get('q', ''));
        if ($q !== '') {
            $qb->andWhere('p.name LIKE :q')->setParameter('q', '%' . $q . '%');
        }

        $state = (string) $request->query->get('state', '');
        if (in_array($state, ['actif', 'inactif'], true)) {
            $qb->andWhere('p.state = :state')->setParameter('state', $state);
        }

        $categoryId = $request->query->getInt('categorie', 0);
        if ($categoryId > 0) {
            // Collection ManyToMany : MEMBER OF (et non « = ») — voir
            // CategoryController::show().
            $qb->andWhere(':categorie MEMBER OF p.categories')->setParameter('categorie', $categoryId);
        }

        if ($this->scope->isSuperAdmin()) {
            $shopId = $request->query->getInt('boutique', 0);
            if ($shopId > 0) {
                $qb->andWhere('p.shop = :boutique')->setParameter('boutique', $shopId);
            }
        } else {
            // Filtre vendeur : jamais contournable via l'URL.
            $this->scope->applyProductScope($qb, 'p');
        }

        $pagination = $this->paginator->paginate(
            $qb,
            max(1, $request->query->getInt('page', 1)),
            20
        );

        return $this->renderAdmin('admin/product/index.html.twig', [
            'pagination' => $pagination,
            'categories' => $this->entityManager->getRepository(Category::class)
                ->createQueryBuilder('c')
                ->orderBy('c.name', 'ASC')
                ->getQuery()
                ->getResult(),
            'boutiques' => $this->scope->isSuperAdmin()
                ? $this->entityManager->getRepository(Boutique::class)
                    ->createQueryBuilder('b')
                    ->orderBy('b.name', 'ASC')
                    ->getQuery()
                    ->getResult()
                : [],
            'filters' => [
                'q' => $q,
                'state' => $state,
                'categorie' => $categoryId,
                'boutique' => $this->scope->isSuperAdmin() ? $request->query->getInt('boutique', 0) : 0,
            ],
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $this->guard();

        $product = new Product();
        // Un vendeur crée toujours dans SA boutique.
        if (!$this->scope->isSuperAdmin()) {
            $product->setShop($this->scope->shop());
        }

        $form = $this->createForm(AdminProductType::class, $product, [
            'with_shop' => $this->scope->isSuperAdmin(),
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $this->resolveVariations($form, $product);
        }

        if ($form->isSubmitted() && $form->isValid()) {
            $this->prepareProduct($product);
            $this->entityManager->persist($product);
            $this->entityManager->flush();

            $this->addFlash('success', sprintf(
                'Le produit « %s » a été créé.%s',
                $product->getName(),
                $this->variationSummary($product)
            ));

            return $this->redirectToRoute('admin_product_index');
        }

        return $this->renderAdmin('admin/product/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'show', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function show(Product $product): Response
    {
        $this->guard();
        $this->scope->assertProduct($product);

        return $this->renderAdmin('admin/product/show.html.twig', [
            'product' => $product,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', requirements: ['id' => '\d+'], methods: ['GET', 'POST'])]
    public function edit(Product $product, Request $request): Response
    {
        $this->guard();
        $this->scope->assertProduct($product);

        // On mémorise la galerie initiale pour supprimer réellement, en base,
        // les images retirées du formulaire (pas d'orphanRemoval côté entité).
        $originalAlbums = $product->getAlbums()->toArray();

        // Idem pour les déclinaisons : retirer une ligne du formulaire doit
        // bien effacer la variation de la base.
        $originalVariations = $product->getProductVariations()->toArray();

        $form = $this->createForm(AdminProductType::class, $product, [
            'with_shop' => $this->scope->isSuperAdmin(),
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $this->resolveVariations($form, $product);
        }

        if ($form->isSubmitted() && $form->isValid()) {
            foreach ($originalVariations as $variation) {
                if (!$product->getProductVariations()->contains($variation)) {
                    $this->entityManager->remove($variation);
                }
            }

            foreach ($originalAlbums as $album) {
                if (!$product->getAlbums()->contains($album)) {
                    $this->entityManager->remove($album);
                }
            }

            $this->prepareProduct($product);
            $this->entityManager->flush();

            $this->addFlash('success', sprintf(
                'Le produit « %s » a été mis à jour.%s',
                $product->getName(),
                $this->variationSummary($product)
            ));

            return $this->redirectToRoute('admin_product_show', ['id' => $product->getId()]);
        }

        return $this->renderAdmin('admin/product/edit.html.twig', [
            'product' => $product,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}/delete', name: 'delete', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function delete(Product $product, Request $request): Response
    {
        $this->guard();
        $this->scope->assertProduct($product);

        if (!$this->isCsrfTokenValid('submit', (string) $request->request->get('_token'))) {
            $this->addFlash('error', 'Jeton de sécurité invalide, veuillez réessayer.');

            return $this->redirectToRoute('admin_product_index');
        }

        if ($product->getOrderDetails()->count() > 0) {
            $this->addFlash(
                'error',
                'Impossible de supprimer ce produit : il apparaît dans des commandes existantes. '
                . 'Désactivez-le plutôt (Visibilité → Inactif).'
            );

            return $this->redirectToRoute('admin_product_index');
        }

        // Albums et déclinaisons référencent le produit : à retirer d'abord.
        foreach ($product->getAlbums()->toArray() as $album) {
            $this->entityManager->remove($album);
        }
        foreach ($product->getProductVariations()->toArray() as $variation) {
            $this->entityManager->remove($variation);
        }

        $name = $product->getName();
        $this->entityManager->remove($product);
        $this->entityManager->flush();

        $this->addFlash('success', sprintf('Le produit « %s » a été supprimé.', $name));

        return $this->redirectToRoute('admin_product_index');
    }

    /**
     * Normalisations avant enregistrement : slug, visibilité.
     */
    private function prepareProduct(Product $product): void
    {
        $slug = trim((string) $product->getSlug());
        if ($slug === '') {
            $slug = (string) (new AsciiSlugger())
                ->slug((string) $product->getName())
                ->lower();
        }
        $product->setSlug($slug !== '' ? $slug : 'produit-' . uniqid());

        if (!$product->getState()) {
            $product->setState('actif');
        }

        if (!$product->isPromotion()) {
            $product->setOffPercent(null);
        }
    }

    /**
     * Prépare les déclinaisons (produit variable) juste après la soumission.
     *
     *  · un produit « simple » ou « groupé » ne conserve aucune déclinaison ;
     *  · les lignes entièrement vides sont retirées (pas de variation fantôme) ;
     *  · les champs « création rapide » (attribut + valeur + couleur) sont
     *    convertis en ProductAttribute / ProductAttributeValue réels ;
     *  · un produit variable sans aucune déclinaison valide est refusé.
     *
     * Les erreurs sont posées SUR LE FORMULAIRE : $form->isValid() devient
     * alors faux, donc rien n'est persisté — aucune écriture n'a lieu tant
     * que le formulaire complet n'est pas valide.
     */
    private function resolveVariations(FormInterface $form, Product $product): void
    {
        if (!$form->has('productVariations')) {
            return;
        }

        $collection = $form->get('productVariations');

        if (Product::TYPE_VARIABLE !== $product->getType()) {
            foreach ($product->getProductVariations()->toArray() as $variation) {
                $product->removeProductVariation($variation);
            }

            return;
        }

        /** @var array<string, ProductAttribute> $attributes */
        $attributes = [];
        /** @var array<string, ProductAttributeValue> $values */
        $values = [];

        foreach ($collection as $entryForm) {
            $variation = $entryForm->getData();

            if (!$variation instanceof ProductVariation) {
                continue;
            }

            $newAttribute = trim((string) $entryForm->get('newAttribute')->getData());
            $newValue = trim((string) $entryForm->get('newValue')->getData());
            $newColor = trim((string) ($entryForm->get('newColor')->getData() ?? ''));

            // Ligne jamais remplie (ou entièrement vidée) : on la retire.
            if (
                0 === $variation->getAttributes()->count()
                && '' === $newValue
                && null === $variation->getPrice()
                && 0 === $variation->getStock()
            ) {
                $product->removeProductVariation($variation);

                continue;
            }

            if (0 === $variation->getAttributes()->count() && '' === $newValue) {
                $entryForm->get('attributes')->addError(new FormError(
                    'Sélectionnez au moins une valeur, ou créez-en une (Attribut + Valeur).'
                ));

                continue;
            }

            if ('' !== $newValue) {
                if ('' === $newAttribute) {
                    $entryForm->get('newAttribute')->addError(new FormError(
                        'Indiquez le nom de l’attribut (ex. « Taille »).'
                    ));

                    continue;
                }

                $attributeKey = mb_strtolower($newAttribute);
                $attributes[$attributeKey] ??= $this->getOrCreateAttribute($newAttribute);
                $attribute = $attributes[$attributeKey];

                $valueKey = $attributeKey . '|' . mb_strtolower($newValue);
                $values[$valueKey] ??= $this->getOrCreateValue($attribute, $newValue, $newColor !== '' ? $newColor : null);

                $variation->addAttribute($values[$valueKey]);
            }

            $variation->setStock(max(0, (int) $variation->getStock()));

            if (null !== $variation->getPrice() && $variation->getPrice() <= 0) {
                $variation->setPrice(null);
            }
        }

        if (0 === $product->getProductVariations()->count()) {
            $collection->addError(new FormError(
                'Ajoutez au moins une déclinaison (combinaison + stock) pour un produit variable.'
            ));
        }
    }

    private function getOrCreateAttribute(string $name): ProductAttribute
    {
        $attribute = $this->entityManager->getRepository(ProductAttribute::class)
            ->findOneBy(['name' => $name]);

        if ($attribute) {
            return $attribute;
        }

        $attribute = (new ProductAttribute())->setName($name);
        $this->entityManager->persist($attribute);

        return $attribute;
    }

    private function getOrCreateValue(ProductAttribute $attribute, string $value, ?string $color): ProductAttributeValue
    {
        // Un attribut créé dans la requête n'a pas encore d'identifiant :
        // l'interroger leverait une EntityNotFoundException. Le cache du
        // contrôleur évite alors tout doublon.
        $existing = null === $attribute->getId()
            ? null
            : $this->entityManager->getRepository(ProductAttributeValue::class)
                ->findOneBy(['attribute' => $attribute, 'value' => $value]);

        if ($existing) {
            if (null !== $color && $existing->getColor() !== $color) {
                $existing->setColor($color);
            }

            return $existing;
        }

        $entity = (new ProductAttributeValue())
            ->setAttribute($attribute)
            ->setValue($value)
            ->setColor($color);
        $this->entityManager->persist($entity);

        return $entity;
    }

    /**
     * Suffixe du message flash : « — 3 déclinaisons ».
     */
    private function variationSummary(Product $product): string
    {
        $count = $product->getProductVariations()->count();

        if (0 === $count) {
            return '';
        }

        return sprintf(' — %d déclinaison%s', $count, $count > 1 ? 's' : '');
    }

    private function createListQueryBuilder(): QueryBuilder
    {
        return $this->entityManager->createQueryBuilder()
            ->select('p')
            ->addSelect('s')
            ->from(Product::class, 'p')
            ->leftJoin('p.shop', 's')
            ->orderBy('p.id', 'DESC');
    }
}
