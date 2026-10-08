<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;

/**
 * Lecture sûre des paramètres entiers de la query string.
 *
 * `InputBag::getInt()` valide la valeur via `filter_var(..., FILTER_VALIDATE_INT)`
 * et LÈVE une `BadRequestException` dès que la valeur n'est pas un entier :
 *
 *     Input value "boutique" is invalid and flag "FILTER_NULL_ON_FAILURE" was not set.
 *
 * Or les formulaires de filtre envoient des valeurs vides (« boutique= »,
 * « categorie= » pour l'option « — Toutes — ») et une URL peut contenir
 * n'importe quoi (« ?page=abc ») : chaque soumission de filtre plantait donc
 * la liste correspondante.
 *
 * Ici, tout ce qui n'est pas un entier écrit (absence, valeur vide, texte,
 * tableau…) retombe silencieusement sur la valeur par défaut.
 */
trait QueryIntTrait
{
    protected function queryInt(Request $request, string $key, int $default = 0): int
    {
        $value = $request->query->all()[$key] ?? $default;

        if (\is_int($value)) {
            return $value;
        }

        if (\is_string($value) && 1 === preg_match('/^-?\d+$/', $value)) {
            return (int) $value;
        }

        return $default;
    }
}
