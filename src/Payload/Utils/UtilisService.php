<?php

namespace App\Payload\Utils;


use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\PropertyAccess\PropertyAccess;

class UtilisService
{
    private PaginatorInterface $paginator;

    /**
     * @param PaginatorInterface $paginator
     */
    public function __construct(PaginatorInterface $paginator)
    {
        $this->paginator = $paginator;
    }

    public function updateObject($existingObject, $newObject)
    {
        $existingClass = get_class($existingObject);
        $newClass = get_class($newObject);

        if ($existingClass !== $newClass) {
            throw new Exception("Objects must be of the same class.");
        }

        // Get the properties of the existing object and update them
        $objectClass = new \ReflectionClass($existingClass);
        $objectProperties = $objectClass->getProperties(\ReflectionProperty::IS_PRIVATE);

        foreach ($objectProperties as $property) {
            $property->setAccessible(true);
            $propertyName = $property->getName();

            // Get the new value from the new object
            $newValue = $this->getPropertyValue($newObject, $propertyName);

            if ($newValue !== null) {
                // Set the property value on the existing object
                $property->setValue($existingObject, $newValue);
            }else{
//                var_dump($propertyName." te");
            }
        }

        return $existingObject;
    }

    private function getPropertyValue($object, $propertyName)
    {
        // Use Symfony's PropertyAccess component to get the property value
        $propertyAccessor = PropertyAccess::createPropertyAccessor();
        return $propertyAccessor->getValue($object, $propertyName);
    }


    public function ToPaginate($pageNumber, $limit, $query): PaginationInterface
    {
        return $this->paginator->paginate(
            $query, /* query NOT result */
            $pageNumber, /*page number*/
            $limit /*limit per page*/
        );
    }

    public function paginationResp($dataArray, $data, $limit){
        return   $array = [
            "items" => $dataArray,
            "currentPageNumber"=> $data->getCurrentPageNumber(),
            "totalItemCount" => $data->getTotalItemCount(),
            "itemPerPage" => $limit,
            "totalPage" => ceil($data->getTotalItemCount() / $limit)
        ];
    }

}