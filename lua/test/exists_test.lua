-- CatchrHttp SDK exists test

local sdk = require("catchr-http_sdk")

describe("CatchrHttpSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
