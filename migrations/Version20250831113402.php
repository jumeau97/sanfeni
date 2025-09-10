<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250831113402 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE product_attribute (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_attribute_value (id INT AUTO_INCREMENT NOT NULL, attribute_id INT DEFAULT NULL, value VARCHAR(255) DEFAULT NULL, INDEX IDX_CCC4BE1FB6E62EFA (attribute_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_variation (id INT AUTO_INCREMENT NOT NULL, product_id INT DEFAULT NULL, price DOUBLE PRECISION DEFAULT NULL, INDEX IDX_C3B85674584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_variation_product_attribute_value (product_variation_id INT NOT NULL, product_attribute_value_id INT NOT NULL, INDEX IDX_48F6CAAADC269DB3 (product_variation_id), INDEX IDX_48F6CAAA9774A42E (product_attribute_value_id), PRIMARY KEY(product_variation_id, product_attribute_value_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE product_attribute_value ADD CONSTRAINT FK_CCC4BE1FB6E62EFA FOREIGN KEY (attribute_id) REFERENCES product_attribute (id)');
        $this->addSql('ALTER TABLE product_variation ADD CONSTRAINT FK_C3B85674584665A FOREIGN KEY (product_id) REFERENCES product (id)');
        $this->addSql('ALTER TABLE product_variation_product_attribute_value ADD CONSTRAINT FK_48F6CAAADC269DB3 FOREIGN KEY (product_variation_id) REFERENCES product_variation (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_variation_product_attribute_value ADD CONSTRAINT FK_48F6CAAA9774A42E FOREIGN KEY (product_attribute_value_id) REFERENCES product_attribute_value (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product_attribute_value DROP FOREIGN KEY FK_CCC4BE1FB6E62EFA');
        $this->addSql('ALTER TABLE product_variation DROP FOREIGN KEY FK_C3B85674584665A');
        $this->addSql('ALTER TABLE product_variation_product_attribute_value DROP FOREIGN KEY FK_48F6CAAADC269DB3');
        $this->addSql('ALTER TABLE product_variation_product_attribute_value DROP FOREIGN KEY FK_48F6CAAA9774A42E');
        $this->addSql('DROP TABLE product_attribute');
        $this->addSql('DROP TABLE product_attribute_value');
        $this->addSql('DROP TABLE product_variation');
        $this->addSql('DROP TABLE product_variation_product_attribute_value');
    }
}
