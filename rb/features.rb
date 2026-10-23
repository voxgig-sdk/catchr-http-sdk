# CatchrHttp SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CatchrHttpFeatures
  def self.make_feature(name)
    case name
    when "base"
      CatchrHttpBaseFeature.new
    when "ratelimit"
      CatchrHttpRatelimitFeature.new
    when "retry"
      CatchrHttpRetryFeature.new
    when "test"
      CatchrHttpTestFeature.new
    when "timeout"
      CatchrHttpTimeoutFeature.new
    else
      CatchrHttpBaseFeature.new
    end
  end
end
