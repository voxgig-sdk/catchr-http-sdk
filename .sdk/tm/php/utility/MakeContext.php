<?php
declare(strict_types=1);

// CatchrHttp SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CatchrHttpMakeContext
{
    public static function call(array $ctxmap, ?CatchrHttpContext $basectx): CatchrHttpContext
    {
        return new CatchrHttpContext($ctxmap, $basectx);
    }
}
