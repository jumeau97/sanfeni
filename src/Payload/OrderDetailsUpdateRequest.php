<?php

namespace App\Payload;

use App\Entity\User;

class OrderDetailsUpdateRequest
{

    public ?string $state = null;


    /**
     * @return string|null
     */
    public function getState(): ?string
    {
        return $this->state;
    }

    /**
     * @param string|null $state
     */
    public function setState(?string $state): void
    {
        $this->state = $state;
    }

}
