<?php

namespace App\Repository;

use App\Entity\Product;
use App\Request\Search\SearchProduct;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Product>
 */
class ProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Product::class);
    }

    public function findAllByCriteria(SearchProduct $data, $pageNumber, $limit)
    {
        $qb = $this->createQueryBuilder('p')
            ->leftJoin('p.categories', 'c')
            ->leftJoin('p.shop', 'shop');

        if (!empty($data->getCategory())) {
            $qb = $qb
                ->andWhere('c.name LIKE :categ')
                ->setParameter('categ', "%{$data->getCategory()}%");
        }

        if (!empty($data->getName())) {
            $qb = $qb
                ->andWhere('p.name LIKE :name')
                ->setParameter('name', "%{$data->getName()}%");
        }

//        dd($data->getState());

        if (!empty($data->getState())) {
            $qb = $qb
                ->andWhere('p.state = :state')
                ->setParameter('state', $data->getState());
        }

//        dd($qb->getFirstResult());

        if (!empty($data->getShopId())) {
            $qb = $qb
                ->andWhere('shop.id= :shopId')
                ->setParameter('shopId', $data->getShopId());
        }

        $qb->setFirstResult($pageNumber - 1)->setMaxResults($limit);
        return $qb;
    }

    //    /**
    //     * @return Product[] Returns an array of Product objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('p.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Product
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

}
