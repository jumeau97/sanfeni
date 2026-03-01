<?php

namespace App\Repository;

use App\Entity\OrderDetails;
use App\Request\Search\SearchOrderDetails;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<OrderDetails>
 */
class OrderDetailsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, OrderDetails::class);
    }

    public function findAllByCriteria(SearchOrderDetails $data, $pageNumber, $limit)
    {
        $qb = $this->createQueryBuilder('o')
            ->leftJoin('o.commande', 'c')
            ->leftJoin('o.produit', 'p')
        ->leftJoin('p.shop', 'shop');

        if (!empty($data->getOrderId())) {
            $qb = $qb
                ->andWhere('c.id= :orderId')
                ->setParameter('orderId', $data->getOrderId());
        }

        if (!empty($data->getShopId())) {
            $qb = $qb
                ->andWhere('shop.id= :shopId')
                ->setParameter('shopId', $data->getShopId());
        }
        $qb->setFirstResult($pageNumber - 1)->setMaxResults($limit);
        return $qb;
    }

    //    /**
    //     * @return OrderDetails[] Returns an array of OrderDetails objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('o')
    //            ->andWhere('o.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('o.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?OrderDetails
    //    {
    //        return $this->createQueryBuilder('o')
    //            ->andWhere('o.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
