
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CatchrHttpSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CatchrHttpSDK.test()
    equal(testsdk instanceof CatchrHttpSDK, true,
      'CatchrHttpSDK.test() must return a client synchronously')
  })

})
