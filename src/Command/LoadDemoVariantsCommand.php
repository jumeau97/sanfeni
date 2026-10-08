<?php

declare(strict_types=1);

namespace App\Command;

use App\Entity\Product;
use App\Entity\ProductAttribute;
use App\Entity\ProductAttributeValue;
use App\Entity\ProductVariation;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Alimente les tables de variantes, restées vides depuis la création du
 * projet : sans cela, les sélecteurs de taille/couleur de la fiche produit
 * n'auraient rien à afficher.
 *
 * Idempotent : un produit qui possède déjà des variations est ignoré.
 *
 *   php bin/console app:demo:variants
 *   php bin/console app:demo:variants --force   (réinitialise les variations)
 */
#[AsCommand(
    name: 'app:demo:variants',
    description: 'Crée attributs (Taille/Couleur), variations et stocks de démonstration pour la fiche produit.'
)]
class LoadDemoVariantsCommand extends Command
{
    /** Couleurs disponibles — deux d'entre elles reprennent l'identité du site. */
    private const COLORS = [
        'Noir'        => '#1b1d21',
        'Bleu marine' => '#082C6A',
        'Gris'        => '#8a8f98',
    ];

    /**
     * Jeux de données. `stock[couleur][taille]` :
     *   · clé absente → la combinaison N'EXISTE PAS (Stimulus l'affiche
     *     comme indisponible, distinct d'une rupture)
     *   · valeur 0    → combinaison en rupture.
     */
    private const CATALOG = [
        'chemise-noire-manches-longues' => [
            'sizes'  => ['S', 'M', 'L', 'XL', '2XL'],
            'colors' => ['Noir', 'Bleu marine'],
            'stock'  => [
                'Noir'        => ['S' => 8, 'M' => 12, 'L' => 6, 'XL' => 0, '2XL' => 3],
                'Bleu marine' => ['S' => 5, 'M' => 9, 'L' => 4, 'XL' => 7],
            ],
        ],
        'pull-col-roule-slim' => [
            'sizes'  => ['S', 'M', 'L', 'XL'],
            'colors' => ['Noir', 'Gris'],
            'stock'  => [
                'Noir' => ['S' => 14, 'M' => 20, 'L' => 11, 'XL' => 6],
                'Gris' => ['S' => 9,  'M' => 15, 'L' => 8,  'XL' => 4],
            ],
        ],
        'col-roule-feminin-noir' => [
            'sizes'  => ['S', 'M', 'L'],
            'colors' => ['Noir', 'Bleu marine'],
            'stock'  => [
                'Noir'        => ['S' => 10, 'M' => 5, 'L' => 0],
                'Bleu marine' => ['S' => 7,  'M' => 3, 'L' => 0],
            ],
        ],
    ];

    /** Produits SANS variation : stock global du produit simple. */
    private const SIMPLE_STOCK = [
        'ecouteurs-sans-fil-airpods' => 3,   // « Plus que 3 en stock »
        'semelles-randonnee'         => 0,   // rupture → CTA désactivé
    ];

    public function __construct(private readonly EntityManagerInterface $em)
    {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $force = (bool) $input->getOption('force');

        $sizeAttribute = $this->getOrCreateAttribute('Taille');
        $colorAttribute = $this->getOrCreateAttribute('Couleur');

        $sizeValues = [];
        $colorValues = [];

        $variationCount = 0;
        $skipped = 0;

        foreach (self::CATALOG as $slug => $config) {
            $product = $this->em->getRepository(Product::class)->findOneBy(['slug' => $slug]);

            if (!$product) {
                $io->warning(sprintf('Produit introuvable : %s', $slug));
                continue;
            }

            if ($force && $product->getProductVariations()->count() > 0) {
                foreach ($product->getProductVariations()->toArray() as $existing) {
                    $product->removeProductVariation($existing);
                    $this->em->remove($existing);
                }
                $this->em->flush();
            }

            if ($product->getProductVariations()->count() > 0) {
                $skipped++;
                $io->text(sprintf('  ↷ ignoré (déjà des variations) : %s', $slug));
                continue;
            }

            foreach ($config['sizes'] as $label) {
                $sizeValues[$label] ??= $this->getOrCreateValue($sizeAttribute, $label);
            }
            foreach ($config['colors'] as $label) {
                $colorValues[$label] ??= $this->getOrCreateValue(
                    $colorAttribute,
                    $label,
                    self::COLORS[$label] ?? null
                );
            }

            $product->setType(Product::TYPE_VARIABLE);

            $createdForProduct = 0;
            foreach ($config['stock'] as $colorLabel => $sizes) {
                foreach ($sizes as $sizeLabel => $stock) {
                    $variation = new ProductVariation();
                    $variation->setProduct($product);
                    $variation->setStock((int) $stock);
                    $variation->addAttribute($colorValues[$colorLabel]);
                    $variation->addAttribute($sizeValues[$sizeLabel]);

                    $this->em->persist($variation);
                    $variationCount++;
                    $createdForProduct++;
                }
            }

            $io->text(sprintf(
                '  ✓ %s → %d variations (%d tailles × %d couleurs)',
                $slug,
                $createdForProduct,
                count($config['sizes']),
                count($config['colors'])
            ));
        }

        $this->em->flush();

        // Produits simples : stock global (null = non géré, inchangé).
        foreach (self::SIMPLE_STOCK as $slug => $stock) {
            $product = $this->em->getRepository(Product::class)->findOneBy(['slug' => $slug]);

            if (!$product) {
                $io->warning(sprintf('Produit introuvable : %s', $slug));
                continue;
            }

            $product->setStock((int) $stock);
            $io->text(sprintf(
                '  ✓ %s → stock %d%s',
                $slug,
                $stock,
                0 === $stock ? ' (rupture, CTA désactivé)' : ''
            ));
        }

        $this->em->flush();

        $io->newLine();
        $io->success(sprintf(
            '%d variation(s) créée(s), %d produit(s) ignoré(s). Lancez ensuite un build des assets si nécessaire.',
            $variationCount,
            $skipped
        ));
        $io->note('Fiches à voir : /details/chemise-noire-manches-longues (dépendances), /details/col-roule-feminin-noir (taille L épuisée).');

        return Command::SUCCESS;
    }

    protected function configure(): void
    {
        $this->addOption('force', null, null, 'Supprime puis recrée les variations existantes');
    }

    private function getOrCreateAttribute(string $name): ProductAttribute
    {
        $attribute = $this->em->getRepository(ProductAttribute::class)->findOneBy(['name' => $name]);

        if ($attribute) {
            return $attribute;
        }

        $attribute = new ProductAttribute();
        $attribute->setName($name);
        $this->em->persist($attribute);
        $this->em->flush();

        return $attribute;
    }

    private function getOrCreateValue(ProductAttribute $attribute, string $value, ?string $color = null): ProductAttributeValue
    {
        $existing = $this->em->getRepository(ProductAttributeValue::class)
            ->findOneBy(['attribute' => $attribute, 'value' => $value]);

        if ($existing) {
            if ($color !== null && $existing->getColor() !== $color) {
                $existing->setColor($color);
                $this->em->flush();
            }

            return $existing;
        }

        $entity = new ProductAttributeValue();
        $entity->setAttribute($attribute);
        $entity->setValue($value);
        $entity->setColor($color);
        $this->em->persist($entity);
        $this->em->flush();

        return $entity;
    }
}
