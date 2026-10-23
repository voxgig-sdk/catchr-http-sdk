<?php
declare(strict_types=1);

// Typed models for the CatchrHttp SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Bin entity data model. */
class Bin
{
    public ?string $id = null;
}

/** Request payload for Bin#create. */
class BinCreateData
{
    public ?string $id = null;
}

/** Request payload for Bin#remove. */
class BinRemoveMatch
{
    public string $id;
    public string $token;
}

/** BinPublic entity data model. */
class BinPublic
{
    public ?string $id = null;
}

/** Request payload for BinPublic#load. */
class BinPublicLoadMatch
{
    public string $id;
}

/** BinRequest entity data model. */
class BinRequest
{
    public ?string $id = null;
}

/** Request payload for BinRequest#load. */
class BinRequestLoadMatch
{
    public string $id;
    public ?int $since = null;
    public string $token;
    public ?int $wait = null;
}

/** Hnt entity data model. */
class Hnt
{
    public ?string $id = null;
}

/** Request payload for Hnt#create. */
class HntCreateData
{
    public string $id;
}

