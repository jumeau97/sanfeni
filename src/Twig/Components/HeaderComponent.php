<?php

namespace App\Twig\Components;

use App\Repository\CategoryRepository;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
final class HeaderComponent
{
    use DefaultActionTrait;

    public function __construct(
        private CategoryRepository $categoryRepository
    )
    {
    }

    #[LiveProp]
    public function getCategories(): array
    {
        // example method that returns an array of Products
        return $this->categoryRepository->findAll();
    }


}
