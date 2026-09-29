<?php

namespace App\Tests\Security;

use App\Security\TemporaryPasswordGenerator;
use PHPUnit\Framework\TestCase;

final class TemporaryPasswordGeneratorTest extends TestCase
{
    private TemporaryPasswordGenerator $generator;

    protected function setUp(): void
    {
        $this->generator = new TemporaryPasswordGenerator();
    }

    public function testGeneratedPasswordHasExpectedLength(): void
    {
        $this->assertSame(16, \strlen($this->generator->generate()));
        $this->assertSame(12, \strlen($this->generator->generate(12)));
    }

    public function testGeneratedPasswordOnlyUsesExpectedAlphabet(): void
    {
        $password = $this->generator->generate(64);

        $this->assertMatchesRegularExpression('/^[A-Za-z0-9]{64}$/', $password);
        // L'alphabet exclut les caractères ambigus.
        $this->assertStringNotContainsString('0', $password);
        $this->assertStringNotContainsString('O', $password);
        $this->assertStringNotContainsString('1', $password);
        $this->assertStringNotContainsString('l', $password);
        $this->assertStringNotContainsString('I', $password);
    }

    public function testTwoGeneratedPasswordsDiffer(): void
    {
        $passwords = array_map(fn () => $this->generator->generate(), range(1, 20));

        $this->assertCount(20, array_unique($passwords), 'Deux mots de passe doivent être différents.');
    }

    public function testLengthBelowEightIsRejected(): void
    {
        $this->expectException(\InvalidArgumentException::class);

        $this->generator->generate(7);
    }

    /**
     * Le mot de passe doit pouvoir être haché et vérifié par Symfony :
     * c'est la propriété que les contrôleurs reposent.
     */
    public function testGeneratedPasswordRoundTripsThroughPasswordHashing(): void
    {
        $password = $this->generator->generate();

        $hash = password_hash($password, PASSWORD_BCRYPT);

        $this->assertTrue(password_verify($password, $hash));
        $this->assertFalse(password_verify('12345678', $hash));
    }
}
