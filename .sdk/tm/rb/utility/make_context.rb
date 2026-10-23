# CatchrHttp SDK utility: make_context
require_relative '../core/context'
module CatchrHttpUtilities
  MakeContext = ->(ctxmap, basectx) {
    CatchrHttpContext.new(ctxmap, basectx)
  }
end
