<?php

namespace App\Repository;

use App\Entity\Order;
use App\Request\Search\SearchOrder;
use App\Request\Search\SearchProduct;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Order>
 */
class OrderRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Order::class);
    }

    public function findSuccesOrders($user)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.isPaid=1')
            ->andWhere('o.user=:user')
            ->setParameter('user', $user)
            ->orderBy('o.id', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function findAllByCriteria(SearchOrder $data, $pageNumber, $limit)
    {
        $qb = $this->createQueryBuilder('o')
            ->leftJoin('o.orderDetails', 'orderD')
            ->leftJoin('orderD.produit', 'p')
            ->leftJoin('p.shop', 'shop');

        if (!empty($data->getShopId())){
            $qb = $qb->andWhere('shop.id = :shopId')
                ->setParameter('shopId', $data->getShopId());
        }

        $qb->setFirstResult($pageNumber - 1)->setMaxResults($limit);
        return $qb;
    }

    //    /**
    //     * @return Order[] Returns an array of Order objects
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

    //    public function findOneBySomeField($value): ?Order
    //    {
    //        return $this->createQueryBuilder('o')
    //            ->andWhere('o.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
