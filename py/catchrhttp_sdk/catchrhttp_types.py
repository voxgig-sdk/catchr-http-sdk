# Typed models for the CatchrHttp SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Bin(TypedDict, total=False):
    id: str


class BinCreateData(TypedDict, total=False):
    id: str


class BinRemoveMatch(TypedDict):
    id: str
    token: str


class BinPublic(TypedDict, total=False):
    id: str


class BinPublicLoadMatch(TypedDict):
    id: str


class BinRequest(TypedDict, total=False):
    id: str


class BinRequestLoadMatchRequired(TypedDict):
    id: str
    token: str


class BinRequestLoadMatch(BinRequestLoadMatchRequired, total=False):
    since: int
    wait: int


class Hnt(TypedDict, total=False):
    id: str


class HntCreateData(TypedDict):
    id: str
