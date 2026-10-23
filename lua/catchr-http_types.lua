-- Typed models for the CatchrHttp SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Bin
---@field id? string

---@class BinCreateData
---@field id? string

---@class BinRemoveMatch
---@field id string
---@field token string

---@class BinPublic
---@field id? string

---@class BinPublicLoadMatch
---@field id string

---@class BinRequest
---@field id? string

---@class BinRequestLoadMatch
---@field id string
---@field since? number
---@field token string
---@field wait? number

---@class Hnt
---@field id? string

---@class HntCreateData
---@field id string

local M = {}

return M
