# CatchrHttp SDK utility: make_context

from projectname_sdk.core.context import CatchrHttpContext


def make_context_util(ctxmap, basectx):
    return CatchrHttpContext(ctxmap, basectx)
