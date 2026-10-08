<?php

namespace App\Enum;

/**
 * États d'une ligne de commande (`order_details.state`).
 *
 * C'est AU NIVEAU DE LA LIGNE que le vendeur valide ou refuse un article :
 * une commande peut contenir les produits de plusieurs boutiques, chaque
 * vendeur ne traite donc que SES lignes.
 *
 * Les valeurs sont en français pour rester compatibles avec les données
 * existantes en base ("En attente" est la valeur par défaut de la colonne).
 */
enum OrderLineState: string
{
    case Pending = 'En attente';
    case Validated = 'Validée';
    case Refused = 'Refusée';
    case Shipped = 'Expédiée';
    case Delivered = 'Livrée';

    public function label(): string
    {
        return $this->value;
    }

    /**
     * Actions rapides proposées au vendeur (boutons Valider / Refuser).
     *
     * @return list<self>
     */
    public static function quickActions(): array
    {
        return [self::Validated, self::Refused];
    }

    /**
     * Une ligne « résolue » n'attend plus d'action du vendeur.
     */
    public function isResolved(): bool
    {
        return in_array($this, [self::Validated, self::Refused, self::Delivered], true);
    }

    public function isPending(): bool
    {
        return $this === self::Pending;
    }
}
