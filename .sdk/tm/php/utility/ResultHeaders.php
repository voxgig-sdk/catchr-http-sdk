<?php
declare(strict_types=1);

// CatchrHttp SDK utility: result_headers

class CatchrHttpResultHeaders
{
    public static function call(CatchrHttpContext $ctx): ?CatchrHttpResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
