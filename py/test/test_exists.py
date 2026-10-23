# CatchrHttp SDK exists test

import pytest
from catchrhttp_sdk import CatchrHttpSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CatchrHttpSDK.test(None, None)
        assert testsdk is not None
