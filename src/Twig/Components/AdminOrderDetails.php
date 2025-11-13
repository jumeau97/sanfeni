<?php

namespace App\Twig\Components;

use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\LiveResponder;

#[AsLiveComponent]
final class AdminOrderDetails
{
    use DefaultActionTrait;

    public mixed $field;

    #[LiveAction]
    public function updateStatus(LiveResponder $liveResponder): void
    {
        dd($this->field);
//        $liveResponder->dispatchBrowserEvent('toggle:status', []);
    }
}
