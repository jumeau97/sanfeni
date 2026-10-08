<?php

namespace App\Twig;

use App\Enum\OrderLineState;
use App\Enum\OrderState;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

/**
 * Filtres/fonctions Twig réservés au back-office sur mesure.
 */
final class AdminExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            // Classe CSS de la pastille de statut (admin-tag-*)
            new TwigFilter('admin_badge', [$this, 'badgeClass']),
            // Montant au format monétaire du projet (F CFA)
            new TwigFilter('fcfa', [$this, 'formatFcfa']),
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('admin_order_state', [OrderState::class, 'tryFromLegacy']),
            new TwigFunction('admin_line_state', [OrderLineState::class, 'tryFrom']),
            new TwigFunction('admin_order_states', [OrderState::class, 'cases']),
            new TwigFunction('admin_line_states', [OrderLineState::class, 'cases']),
            new TwigFunction('admin_line_actions', [OrderLineState::class, 'quickActions']),
        ];
    }

    /**
     * Convertit un état (n'importe quelle valeur présente en base, y compris
     * les anciens entiers 0..3 d'EasyAdmin) en classe de badge.
     */
    public function badgeClass(?string $state): string
    {
        $normalized = mb_strtolower(trim((string) $state));

        return match (true) {
            in_array($normalized, ['actif', 'livrée', 'payée', 'validée', 'expédiée'], true) => 'admin-tag-ok',
            in_array($normalized, ['en attente', 'préparation en cours', 'en cours de traitement', '0'], true) => 'admin-tag-warn',
            in_array($normalized, ['refusée', 'partiellement refusée', 'non payée', 'inactif', 'suspendue'], true) => 'admin-tag-danger',
            default => 'admin-tag-neutral',
        };
    }

    public function formatFcfa(int|float|string|null $amount): string
    {
        $value = (float) ($amount ?? 0);

        return number_format($value, 0, ',', ' ') . ' F cfa';
    }
}
