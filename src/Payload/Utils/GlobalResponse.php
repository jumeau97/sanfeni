<?php

namespace App\Payload\Utils;

use Symfony\Component\HttpFoundation\JsonResponse;

class GlobalResponse
{
    public static function success($message, $statusCode = 200): JsonResponse
    {
        return new JsonResponse(['message' => $message, 'status' => 1], $statusCode);
    }

    public static function successWith($message, $data = null, $statusCode = 200, $headers=[], $json=false): JsonResponse
    {
        return new JsonResponse(['message' => $message, 'status' => 1, 'data' => $data], $statusCode, $headers, $json);
    }

    public static function error($message, $statusCode = 400): JsonResponse
    {
        return new JsonResponse(['message' => $message, 'status' => 0], $statusCode);
    }

    public static function errorWith($message, $data = null, $statusCode = 400, $headers=[], $json=false): JsonResponse
    {
        return new JsonResponse(['message' => $message, 'status' => 0, 'data' => $data], $statusCode, $headers, $json);
    }

}