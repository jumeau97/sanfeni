<?php

namespace App\Service\Admin;

use App\Entity\Order;
use App\Enum\OrderLineState;
use App\Enum\OrderState;

/**
 * Recalcule l'état GLOBAL d'une commande à partir de l'état de ses lignes.
 *
 * Le vendeur n'agit que sur ses propres lignes ; l'état de la commande en
 * découle :
 *
 *   · toutes les lignes livrées            → « Livrée » (et payée)
 *   · toutes les lignes refusées           → « Refusée » (non payée)
 *   · plus aucune ligne en attente,
 *     avec au moins un refus               → « Partiellement refusée »
 *   · plus aucune ligne en attente         → « Validée »
 *   · au moins une ligne traitée           → « En cours de traitement »
 *   · sinon                                → « En attente »
 */
final class OrderStatusSynchronizer
{
    public function sync(Order $order): void
    {
        $states = [];
        foreach ($order->getOrderDetails() as $line) {
            $states[] = OrderLineState::tryFrom($line->getState() ?? '') ?? OrderLineState::Pending;
        }

        if ($states === []) {
            return;
        }

        $all = static fn (callable $test): bool => array_reduce(
            $states,
            static fn (bool $carry, OrderLineState $state): bool => $carry && $test($state),
            true
        );

        $any = static fn (callable $test): bool => count(array_filter($states, $test)) > 0;

        $allDelivered = $all(static fn (OrderLineState $s): bool => $s === OrderLineState::Delivered);
        $allRefused = $all(static fn (OrderLineState $s): bool => $s === OrderLineState::Refused);
        $noPending = $all(static fn (OrderLineState $s): bool => !$s->isPending());
        $anyRefused = $any(static fn (OrderLineState $s): bool => $s === OrderLineState::Refused);
        $anyProcessing = $any(static fn (OrderLineState $s): bool => !$s->isPending());

        if ($allDelivered) {
            $order->setState(OrderState::Delivered->value);
            $order->setIsPaid(true);

            return;
        }

        if ($allRefused) {
            $order->setState(OrderState::Refused->value);
            $order->setIsPaid(false);

            return;
        }

        if ($noPending) {
            $order->setState(
                $anyRefused ? OrderState::PartiallyRefused->value : OrderState::Validated->value
            );
            // Une commande validée n'est payée qu'une fois livrée.
            if (!$anyRefused) {
                $order->setIsPaid($order->isPaid() ?? false);
            }

            return;
        }

        if ($anyProcessing) {
            $order->setState(OrderState::Processing->value);
        } else {
            $order->setState(OrderState::Pending->value);
        }
    }
}
