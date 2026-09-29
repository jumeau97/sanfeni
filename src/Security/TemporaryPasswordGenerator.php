<?php

namespace App\Security;

/**
 * Génère un mot de passe provisoire pour un compte créé par un administrateur.
 *
 * Aucun mot de passe ne doit être codé en dur : chaque compte reçoit un mot de
 * passe propre, transmis au titulaire par e-mail (voir CredentialsMailer).
 */
final class TemporaryPasswordGenerator
{
    /**
     * Alphabet sans caractère ambigu (0/O, 1/l/I) pour faciliter la saisie
     * manuelle si l'utilisateur doit le recopier.
     *
     * @var string
     */
    private const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';

    public function generate(int $length = 16): string
    {
        if ($length < 8) {
            throw new \InvalidArgumentException('Un mot de passe provisoire doit contenir au moins 8 caractères.');
        }

        $max = \strlen(self::ALPHABET) - 1;
        $password = '';

        for ($i = 0; $i < $length; ++$i) {
            $password .= self::ALPHABET[random_int(0, $max)];
        }

        return $password;
    }
}
