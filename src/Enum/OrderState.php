<?php

namespace App\Enum;

/**
 * États globaux d'une commande (`order.state`).
 *
 * Le passage d'état est recalculé automatiquement à partir des états des
 * lignes (voir App\Service\Admin\OrderStatusSynchronizer) : le vendeur agit
 * sur ses lignes, l'administrateur peut forcer l'état de la commande.
 *
 * Les anciennes valeurs numériques encore présentes en base (0..3 issues du
 * formulaire EasyAdmin démantelé) sont retournées telles quelles par
 * tryFromLegacy() et restent affichables via le filtre admin_badge().
 */
enum OrderState: string
{
    case Pending = 'En attente';
    case Processing = 'En cours de traitement';
    case Validated = 'Validée';
    case InPreparation = 'Préparation en cours';
    case Shipped = 'Expédiée';
    case Delivered = 'Livrée';
    case Refused = 'Refusée';
    case PartiallyRefused = 'Partiellement refusée';

    public function label(): string
    {
        return $this->value;
    }

    /**
     * Reconnait aussi les valeurs héritées de l'ancien back-office.
     */
    public static function tryFromLegacy(?string $value): ?self
    {
        if ($value === null || $value === '') {
            return self::Pending;
        }

        $direct = self::tryFrom($value);
        if ($direct !== null) {
            return $direct;
        }

        return match ($value) {
            '0', 'Non payée' => self::Pending,
            '1', 'Payée' => self::Validated,
            '2' => self::InPreparation,
            '3' => self::Shipped,
            default => null,
        };
    }
}
