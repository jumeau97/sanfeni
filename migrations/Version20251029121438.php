<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251029121438 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE order_details ADD produit_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE order_details ADD CONSTRAINT FK_845CA2C1F347EFB FOREIGN KEY (produit_id) REFERENCES product (id)');
        $this->addSql('CREATE INDEX IDX_845CA2C1F347EFB ON order_details (produit_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE order_details DROP FOREIGN KEY FK_845CA2C1F347EFB');
        $this->addSql('DROP INDEX IDX_845CA2C1F347EFB ON order_details');
        $this->addSql('ALTER TABLE order_details DROP produit_id');
    }
}
