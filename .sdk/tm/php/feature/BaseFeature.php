<?php
declare(strict_types=1);

// CatchrHttp SDK base feature

class CatchrHttpBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CatchrHttpContext $ctx, array $options): void {}
    public function PostConstruct(CatchrHttpContext $ctx): void {}
    public function PostConstructEntity(CatchrHttpContext $ctx): void {}
    public function SetData(CatchrHttpContext $ctx): void {}
    public function GetData(CatchrHttpContext $ctx): void {}
    public function GetMatch(CatchrHttpContext $ctx): void {}
    public function SetMatch(CatchrHttpContext $ctx): void {}
    public function PrePoint(CatchrHttpContext $ctx): void {}
    public function PreSpec(CatchrHttpContext $ctx): void {}
    public function PreRequest(CatchrHttpContext $ctx): void {}
    public function PreResponse(CatchrHttpContext $ctx): void {}
    public function PreResult(CatchrHttpContext $ctx): void {}
    public function PreDone(CatchrHttpContext $ctx): void {}
    public function PreUnexpected(CatchrHttpContext $ctx): void {}
}
