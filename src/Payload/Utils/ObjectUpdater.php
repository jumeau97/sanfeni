<?php

namespace App\Payload\Utils;

use Doctrine\ORM\EntityManagerInterface;
use http\Exception\InvalidArgumentException;
use Symfony\Component\PropertyAccess\PropertyAccess;

class ObjectUpdater
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function updateObject($existingObject, $newObject)
    {
        $existingClass = get_class($existingObject);
        $newClass = get_class($newObject);

        if ($existingClass !== $newClass) {
            throw new InvalidArgumentException("Objects must be of the same class.");
        }

        // Get the properties of the existing object and update them
        $objectClass = new \ReflectionClass($existingClass);
        $objectProperties = $objectClass->getProperties(\ReflectionProperty::IS_PRIVATE);

        foreach ($objectProperties as $property) {
            $property->setAccessible(true);
            $propertyName = $property->getName();

            // Get the new value from the new object
            $newValue = $this->getPropertyValue($newObject, $propertyName);

            if ($newValue !== null && !empty($newValue)) {
                // Set the property value on the existing object
                $property->setValue($existingObject, $newValue);
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
}