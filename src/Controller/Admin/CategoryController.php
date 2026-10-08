<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Entity\Product;
use App\Form\Admin\AdminCategoryType;
use App\Service\Admin\AdminScope;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * CRUD Catégories.
 *
 * Les catégories sont un référentiel PARTAGÉ : tout le monde peut les
 * consulter (un vendeur en a besoin pour classer ses produits), mais seul
 * un administrateur les crée / modifie / supprime.
 */
#[Route('/admin/categories', name: 'admin_category_')]
final class CategoryController extends AbstractAdminController
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

        $qb = $this->entityManager->createQueryBuilder()
            ->select('c')
            ->addSelect('p')
            ->from(Category::class, 'c')
            ->leftJoin('c.parentCateg', 'p')
            ->orderBy('c.name', 'ASC');

        $q = trim((string) $request->query->get('q', ''));
        if ($q !== '') {
            $qb->andWhere('c.name LIKE :q')->setParameter('q', '%' . $q . '%');
        }

        $pagination = $this->paginator->paginate(
            $qb,
            max(1, $request->query->getInt('page', 1)),
            20
        );

        // Nombre de produits par catégorie (1 seule requête, pas de N+1).
        $counts = $this->entityManager->createQueryBuilder()
            ->select('c.id AS cid, COUNT(p.id) AS total')
            ->from(Category::class, 'c')
            ->leftJoin('c.products', 'p')
            ->groupBy('c.id')
            ->getQuery()
            ->getArrayResult();

        return $this->renderAdmin('admin/category/index.html.twig', [
            'pagination' => $pagination,
            'productCounts' => array_column($counts, 'total', 'cid'),
            'filters' => ['q' => $q],
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $this->guard();
        $this->scope->assertCanManageGlobalData();

        $category = new Category();
        $form = $this->createForm(AdminCategoryType::class, $category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($category);
            $this->entityManager->flush();

            $this->addFlash('success', sprintf('La catégorie « %s » a été créée.', $category->getName()));

            return $this->redirectToRoute('admin_category_index');
        }

        return $this->renderAdmin('admin/category/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'show', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function show(Category $category, Request $request): Response
    {
        $this->guard();

        $products = $this->entityManager->createQueryBuilder()
            ->select('p')
            ->addSelect('s')
            ->from(Product::class, 'p')
            ->leftJoin('p.shop', 's')
            // p.categories est une collection (ManyToMany) : la comparaison
            // « = » est interdite par Doctrine, MEMBER OF génère un EXISTS.
            ->where(':category MEMBER OF p.categories')
            ->setParameter('category', $category)
            ->orderBy('p.name', 'ASC');

        $pagination = $this->paginator->paginate(
            $products,
            max(1, $request->query->getInt('page', 1)),
            20
        );

        return $this->renderAdmin('admin/category/show.html.twig', [
            'category' => $category,
            'pagination' => $pagination,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', requirements: ['id' => '\d+'], methods: ['GET', 'POST'])]
    public function edit(Category $category, Request $request): Response
    {
        $this->guard();
        $this->scope->assertCanManageGlobalData();

        $form = $this->createForm(AdminCategoryType::class, $category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Une catégorie ne peut pas être son propre parent.
            if ($category->getParentCateg()?->getId() === $category->getId()) {
                $category->setParentCateg(null);
            }

            $this->entityManager->flush();

            $this->addFlash('success', sprintf('La catégorie « %s » a été mise à jour.', $category->getName()));

            return $this->redirectToRoute('admin_category_index');
        }

        return $this->renderAdmin('admin/category/edit.html.twig', [
            'category' => $category,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}/delete', name: 'delete', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function delete(Category $category, Request $request): Response
    {
        $this->guard();
        $this->scope->assertCanManageGlobalData();

        if (!$this->isCsrfTokenValid('submit', (string) $request->request->get('_token'))) {
            $this->addFlash('error', 'Jeton de sécurité invalide, veuillez réessayer.');

            return $this->redirectToRoute('admin_category_index');
        }

        if ($category->getProducts()->count() > 0 || $category->getCategories()->count() > 0) {
            $this->addFlash(
                'error',
                'Impossible de supprimer cette catégorie : elle est référencée par des produits ou des sous-catégories.'
            );

            return $this->redirectToRoute('admin_category_index');
        }

        $name = $category->getName();
        $this->entityManager->remove($category);
        $this->entityManager->flush();

        $this->addFlash('success', sprintf('La catégorie « %s » a été supprimée.', $name));

        return $this->redirectToRoute('admin_category_index');
    }
}
