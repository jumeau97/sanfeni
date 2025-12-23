<?php

namespace App\Repository;

use App\Entity\Category;
use App\Payload\SearchRequest\SearchProduct;
use App\Request\Search\SearchCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Category>
 */
class CategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Category::class);
    }

    public function findAllByCriteria(SearchCategory $data, $pageNumber, $limit)
    {
        $qb = $this->createQueryBuilder('c');


        $qb->setFirstResult($pageNumber - 1)->setMaxResults($limit);
        return $qb;
    }

    public function findCategoryTree(): array
    {
        $categories = $this->createQueryBuilder('c')
            ->leftJoin('c.parentCateg', 'p')
            ->addSelect('p')
            ->orderBy('c.name', 'ASC')
            ->getQuery()
            ->getResult();

        $map = [];
        $tree = [];

        /** @var Category $cat */
        foreach ($categories as $cat) {
            // on vide les enfants pour éviter doublons
            $cat->getCategories()->clear();
            $map[$cat->getId()] = $cat;
        }

        foreach ($categories as $cat) {

            // ✅ catégorie racine
            if ($cat->getParentCateg() === null) {
                $tree[] = $cat;
            } else {
                $parentId = $cat->getParentCateg()->getId();

                if (isset($map[$parentId])) {
                    $map[$parentId]->getCategories()->add($cat);
                }
            }
        }

        return $tree;
    }


    //    /**
    //     * @return Category[] Returns an array of Category objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('c.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Category
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
