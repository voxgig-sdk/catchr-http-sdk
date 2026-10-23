# CatchrHttp SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CatchrHttpUtility.registrar = ->(u) {
  u.clean = CatchrHttpUtilities::Clean
  u.clean_add = CatchrHttpUtilities::CleanAdd
  u.clean_explain = CatchrHttpUtilities::CleanExplain
  u.done = CatchrHttpUtilities::Done
  u.make_error = CatchrHttpUtilities::MakeError
  u.feature_add = CatchrHttpUtilities::FeatureAdd
  u.feature_hook = CatchrHttpUtilities::FeatureHook
  u.feature_init = CatchrHttpUtilities::FeatureInit
  u.fetcher = CatchrHttpUtilities::Fetcher
  u.make_fetch_def = CatchrHttpUtilities::MakeFetchDef
  u.make_context = CatchrHttpUtilities::MakeContext
  u.make_options = CatchrHttpUtilities::MakeOptions
  u.make_request = CatchrHttpUtilities::MakeRequest
  u.make_response = CatchrHttpUtilities::MakeResponse
  u.make_result = CatchrHttpUtilities::MakeResult
  u.make_point = CatchrHttpUtilities::MakePoint
  u.make_spec = CatchrHttpUtilities::MakeSpec
  u.make_url = CatchrHttpUtilities::MakeUrl
  u.param = CatchrHttpUtilities::Param
  u.prepare_auth = CatchrHttpUtilities::PrepareAuth
  u.prepare_body = CatchrHttpUtilities::PrepareBody
  u.prepare_headers = CatchrHttpUtilities::PrepareHeaders
  u.prepare_method = CatchrHttpUtilities::PrepareMethod
  u.prepare_params = CatchrHttpUtilities::PrepareParams
  u.prepare_path = CatchrHttpUtilities::PreparePath
  u.prepare_query = CatchrHttpUtilities::PrepareQuery
  u.graphql_body = CatchrHttpUtilities::GraphqlBody
  u.graphql_errors = CatchrHttpUtilities::GraphqlErrors
  u.result_basic = CatchrHttpUtilities::ResultBasic
  u.result_body = CatchrHttpUtilities::ResultBody
  u.result_headers = CatchrHttpUtilities::ResultHeaders
  u.transform_request = CatchrHttpUtilities::TransformRequest
  u.transform_response = CatchrHttpUtilities::TransformResponse
}
