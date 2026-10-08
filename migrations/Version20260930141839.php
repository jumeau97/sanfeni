<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260930141839 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Fiche produit : stock par produit simple, stock par variation '. '(tailles/couleurs en rupture) et code couleur des attributs.';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product ADD stock INT DEFAULT NULL');
        $this->addSql('ALTER TABLE product_attribute_value ADD color VARCHAR(20) DEFAULT NULL');
        $this->addSql('ALTER TABLE product_variation ADD stock INT NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product DROP stock');
        $this->addSql('ALTER TABLE product_attribute_value DROP color');
        $this->addSql('ALTER TABLE product_variation DROP stock');
    }
}
