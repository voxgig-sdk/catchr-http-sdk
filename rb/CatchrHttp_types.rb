# frozen_string_literal: true

# Typed models for the CatchrHttp SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Bin entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Bin = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Bin#create.
#
# @!attribute [rw] id
#   @return [String, nil]
BinCreateData = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Bin#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] token
#   @return [String]
BinRemoveMatch = Struct.new(
  :id,
  :token,
  keyword_init: true
)

# BinPublic entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
BinPublic = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for BinPublic#load.
#
# @!attribute [rw] id
#   @return [String]
BinPublicLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# BinRequest entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
BinRequest = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for BinRequest#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] since
#   @return [Integer, nil]
#
# @!attribute [rw] token
#   @return [String]
#
# @!attribute [rw] wait
#   @return [Integer, nil]
BinRequestLoadMatch = Struct.new(
  :id,
  :since,
  :token,
  :wait,
  keyword_init: true
)

# Hnt entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Hnt = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Hnt#create.
#
# @!attribute [rw] id
#   @return [String]
HntCreateData = Struct.new(
  :id,
  keyword_init: true
)

