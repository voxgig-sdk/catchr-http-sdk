// Typed models for the CatchrHttp SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Bin {
  id?: string
}

export interface BinCreateData {
  id?: string

  // Selects a custom action instead of the plain create:
  //   'public' | 'response'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BinRemoveMatch {
  id: string
  token: string

  // Selects a custom action instead of the plain remove:
  //   'public' | 'response'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BinPublic {
  id?: string
}

export interface BinPublicLoadMatch {
  id: string
}

export interface BinRequest {
  id?: string
}

export interface BinRequestLoadMatch {
  id: string
  since?: number
  token: string
  wait?: number
}

export interface Hnt {
  id?: string
}

export interface HntCreateData {
  id: string
}

