# CatchrHttp SDK exists test

require "minitest/autorun"
require_relative "../CatchrHttp_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CatchrHttpSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
