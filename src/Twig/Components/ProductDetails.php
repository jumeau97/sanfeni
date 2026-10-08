<?php

namespace App\Twig\Components;

use App\Entity\Product;
use App\Entity\ProductAttributeValue;
use App\Entity\ProductVariation;
use App\Model\Cart;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\LiveResponder;

/**
 * Fiche produit.
 *
 * Le composant expose au template UNIQUEMENT du présentationnel groupé
 * (libellés, couleurs, stocks) plus la « matrice » des variations servant
 * de source de vérité à Stimulus. Toute la logique de combinaisons
 * (quelle taille devient indisponible quand on choisit telle couleur)
 * est calculée côté client pour rester instantanée.
 *
 * Le serveur, lui, garde le dernier mot : @see addToCart() qui revalide
 * la sélection et borne la quantité au stock réel.
 */
#[AsLiveComponent]
final class ProductDetails extends AbstractController
{
    use DefaultActionTrait;

    #[LiveProp]
    public Product $product;

    /**
     * Dernière erreur d'ajout au panier, affichée dans la fiche.
     * null = aucune erreur.
     */
    #[LiveProp]
    public ?string $error = null;

    public function __construct(
        private Cart          $cartService,
        private LiveResponder $liveResponder
    )
    {
    }

    /* ============================================================
       LECTURE — groupes d'options pour le template
       ============================================================ */

    /**
     * Groupes d'options (« Taille », « Couleur », …) avec, pour chaque
     * option, son stock agrégé et sa disponibilité *initiale* (sans tenir
     * compte des autres choix : c'est Stimulus qui affinera au fil des
     * sélections).
     *
     * @return array<int, array{id:int, name:string, type:string, options:array<int, array{id:int, label:string, color:?string, stock:int, available:bool, attributeId:int}>}>
     */
    public function getOptionGroups(): array
    {
        $groups = [];

        foreach ($this->product->getProductVariations() as $variation) {
            $variationStock = $variation->getStock();

            foreach ($variation->getAttributes() as $attrValue) {
                $attribute = $attrValue->getAttribute();
                if (!$attribute) {
                    continue;
                }

                $attributeId = (int) $attribute->getId();
                $valueId = (int) $attrValue->getId();

                if (!isset($groups[$attributeId])) {
                    $groups[$attributeId] = [
                        'id'      => $attributeId,
                        'name'    => trim((string) $attribute->getName()) ?: 'Option',
                        'type'    => 'text',
                        'options' => [],
                    ];
                }

                if (!isset($groups[$attributeId]['options'][$valueId])) {
                    $groups[$attributeId]['options'][$valueId] = [
                        'id'          => $valueId,
                        'label'       => trim((string) $attrValue->getValue()),
                        'color'       => $attrValue->getColor(),
                        'stock'       => 0,
                        'available'   => false,
                        'attributeId' => $attributeId,
                    ];
                }

                $groups[$attributeId]['options'][$valueId]['stock'] += $variationStock;
                if ($variationStock > 0) {
                    $groups[$attributeId]['options'][$valueId]['available'] = true;
                }
            }
        }

        // Un attribut où TOUTES les valeurs portent une couleur est un
        // sélecteur de couleur, même s'il est mal nommé en base.
        foreach ($groups as $attributeId => $group) {
            $hasColorOnEveryOption = $group['options'] !== [] && count(
                array_filter($group['options'], static fn (array $o) => null !== $o['color'])
            ) === count($group['options']);

            $groups[$attributeId]['type'] = $this->resolveGroupType($group['name'], $hasColorOnEveryOption);
        }

        // Couleurs d'abord, puis tailles, puis le reste : c'est l'ordre
        // naturel d'un tunnel d'achat (on choisit la couleur, puis la taille).
        $priority = ['color' => 0, 'size' => 1, 'text' => 2];
        $groups = array_values($groups);
        usort($groups, static fn (array $a, array $b) => $priority[$a['type']] <=> $priority[$b['type']]);

        foreach ($groups as $index => $group) {
            $groups[$index]['options'] = $this->sortOptions($group['options'], $group['type']);
        }

        return $groups;
    }

    /**
     * Matrice complète des variations, sérialisée pour Stimulus.
     * C'est elle qui permet de désactiver instantanément une combinaison
     * introuvable (ex. « Rouge » n'existe pas en « XL »).
     */
    public function getOptionsPayload(): array
    {
        $groups = $this->getOptionGroups();

        $variations = [];
        foreach ($this->product->getProductVariations() as $variation) {
            $variations[] = [
                'id'       => (int) $variation->getId(),
                'valueIds' => array_map(
                    static fn (ProductAttributeValue $v) => (int) $v->getId(),
                    $variation->getAttributes()->toArray()
                ),
                'stock'    => $variation->getStock(),
                'price'    => $variation->getPrice(),
            ];
        }

        return [
            'groups'      => $groups,
            'variations'  => $variations,
            // Prix EFFECTIF (remise déjà appliquée) : c'est lui que
            // Stimulus réaffiche quand la sélection change, sinon la
            // promotion serait perdue dès la première interaction.
            'basePrice'   => $this->effectivePrice(),
            // null = stock non géré pour ce produit → aucune mention,
            // et ajout au panier libre (comportement des 12 produits actuels).
            'totalStock'  => $this->getTotalStock(),
            'hasVariants' => $this->hasVariants(),
        ];
    }

    /**
     * Prix de référence affiché : tarif remisé si promotion, sinon prix barré.
     * Recalcule ce que le template met déjà dans `.wb-price`, pour rester
     * cohérent après une interaction.
     */
    public function effectivePrice(): ?float
    {
        $price = $this->product->getPrice();

        if (null === $price) {
            return null;
        }

        if ($this->product->isPromotion() && $this->product->getOffPercent()) {
            return round($price * (1 - $this->product->getOffPercent() / 100));
        }

        return $price;
    }

    /**
     * Stock total : somme des variations si le produit est variable,
     * sinon le stock du produit simple (null si non géré).
     */
    public function getTotalStock(): ?int
    {
        $variations = $this->product->getProductVariations();

        if ($variations->count() > 0) {
            $sum = 0;
            foreach ($variations as $variation) {
                $sum += $variation->getStock();
            }

            return $sum;
        }

        return $this->product->getStock();
    }

    public function hasVariants(): bool
    {
        return $this->product->getProductVariations()->count() > 0;
    }

    /** Le produit possède-t-il des photos supplémentaires (miniatures) ? */
    public function hasGallery(): bool
    {
        return $this->product->getAlbums()->count() > 0;
    }

    /* ============================================================
       ÉCRITURE — ajout au panier
       ============================================================ */

    /**
     * Ajout au panier.
     *
     * Les deux paramètres arrivent depuis des attributs `data-live-*-param`
     * que Stimulus maintient à jour : on les reçoit donc comme des string
     * (parfois absents) — d'où la normalisation manuelle.
     *
     * ⚠ #[LiveArg] est INDISPENSABLE : LiveArg::liveArgs() ne collecte que
     *   les paramètres qui en sont marqués. Sans lui, le subscriber ne pose
     *   aucun attribut sur la requête et la méthode reçoit... ses valeurs
     *   par défaut — quantité et variante seraient donc ignorées en silence
     *   alors que la fiche afficherait le bon choix.
     *
     * La sélection de variante et la quantité sont REVALIDÉES ici : un
     * client pourrait désactiver les garde-fous, il ne doit pas pouvoir
     * commander une combinaison en rupture.
     *
     * @param int|string|null $quantity
     * @param int|string|null $variationId
     */
    #[LiveAction]
    public function addToCart(
        #[LiveArg] $quantity = 1,
        #[LiveArg] $variationId = null
    ) {
        if (!$this->product->getId()) {
            $this->error = 'Ce produit n\'est plus disponible.';

            return;
        }

        $this->error = null;
        $quantity = max(1, (int) $quantity);
        $variationId = ($variationId !== null && '' !== $variationId) ? (int) $variationId : null;

        if ($this->hasVariants()) {
            $variation = $this->findVariation($variationId);

            if (!$variation) {
                $this->error = 'Sélectionnez une combinaison disponible.';

                return;
            }

            if ($variation->getStock() <= 0) {
                $this->error = sprintf(
                    'Cette combinaison (%s) est en rupture de stock.',
                    $this->describeVariation($variation)
                );

                return;
            }

            if ($quantity > $variation->getStock()) {
                $quantity = $variation->getStock();
            }
        } else {
            $stock = $this->product->getStock();

            if (null !== $stock) {
                if ($stock <= 0) {
                    $this->error = 'Ce produit est en rupture de stock.';

                    return;
                }

                $quantity = min($quantity, $stock);
            }
        }

        $this->cartService->add($this->product->getId(), $quantity);
        $this->liveResponder->emit('headerCartUpdated', componentName: 'HeaderCartComponent');

        return $this->redirectToRoute('cart');
    }

    /* ============================================================
       INTERNES
       ============================================================ */

    private function findVariation(?int $variationId): ?ProductVariation
    {
        if (null === $variationId) {
            return null;
        }

        foreach ($this->product->getProductVariations() as $variation) {
            if ((int) $variation->getId() === $variationId) {
                return $variation;
            }
        }

        return null;
    }

    private function describeVariation(ProductVariation $variation): string
    {
        $parts = [];
        foreach ($variation->getAttributes() as $attrValue) {
            $parts[] = trim(
                (($attrValue->getAttribute()?->getName() ?: '') . ' ' . ($attrValue->getValue() ?: ''))
            );
        }

        return $parts !== [] ? implode(' · ', $parts) : 'cette sélection';
    }

    private function resolveGroupType(string $name, bool $hasColorOnEveryOption): string
    {
        if ($hasColorOnEveryOption) {
            return 'color';
        }

        $normalized = mb_strtolower(trim($name));

        if (in_array($normalized, ['couleur', 'couleurs', 'color', 'colors'], true)) {
            return 'color';
        }

        if (in_array($normalized, ['taille', 'tailles', 'size', 'sizes'], true)) {
            return 'size';
        }

        return 'text';
    }

    /**
     * Ordre naturel des tailles (S < M < L < XL) plutôt que l'ordre
     * alphabétique qui donnerait « 2XL, L, M, S, XL ».
     *
     * @param array<int, array> $options
     * @return array<int, array>
     */
    private function sortOptions(array $options, string $type): array
    {
        $options = array_values($options);

        if ('size' !== $type) {
            return $options;
        }

        $ranks = [
            '3xs' => 0, '2xs' => 1, 'xxs' => 2, 'xs' => 3,
            's' => 4, 'm' => 5, 'l' => 6,
            'xl' => 7, 'xxl' => 8, '2xl' => 8, 'xxxl' => 9, '3xl' => 9,
            '4xl' => 10, '5xl' => 11,
        ];

        $rankOf = static function (array $option) use ($ranks): int {
            $key = mb_strtolower(trim($option['label']));

            return $ranks[$key] ?? 100;
        };

        usort($options, static function (array $a, array $b) use ($rankOf): int {
            $diff = $rankOf($a) <=> $rankOf($b);

            return 0 !== $diff ? $diff : strcmp($a['label'], $b['label']);
        });

        return $options;
    }
}
