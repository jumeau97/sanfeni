<?php

namespace App\Payload\Utils;

use Symfony\Component\PropertyAccess\PropertyAccessorInterface;

class DtoMapperService
{
    private PropertyAccessorInterface $propertyAccessor;

    public function __construct(PropertyAccessorInterface $propertyAccessor)
    {
        $this->propertyAccessor = $propertyAccessor;
    }


    public function mapDtoToEntity($dto, $entity): object
    {
        $reflectionEntity = new \ReflectionClass($entity);
        $entityProperties = [];

        foreach ($reflectionEntity->getProperties() as $property) {
            $property->setAccessible(true);

            $propertyName = $property->getName();
            // Vérifier si la propriété est initialisée dans l'entité
            if (property_exists($entity, $propertyName)) {
                $entityProperties[$propertyName] = $property->getValue($entity);
            } else {
                $entityProperties[$propertyName] = null;
            }
        }

        foreach ($entityProperties as $propertyName => $propertyValue) {
            if (property_exists($dto, $propertyName)) {
                $setterMethod = 'set' . ucfirst($propertyName);

                if (method_exists($entity, $setterMethod)) {
                    // Vérifier si la propriété du DTO n'est pas nulle et la gérer en conséquence
                    if ($dto->$propertyName !== null) {
                        $entity->$setterMethod($dto->$propertyName);
                    } else {
                        // En option, vous pouvez gérer le cas où la propriété du DTO est nulle
                        // Par exemple, décider de ne pas mettre à jour la propriété de l'entité dans ce cas.
                    }
                } else {
                    // Si le setter n'existe pas, essayer de définir directement la propriété
                    $entity->$propertyName = $dto->$propertyName;
                }
            }
        }

        return $entity;
    }

}