

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CatchrHttpSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('BinRequestEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CATCHR_HTTP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CATCHR_HTTP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CatchrHttpSDK.test()
    const ent = testsdk.BinRequest()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CatchrHttpSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.BinRequest().load({"id":1,"token":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CATCHR_HTTP_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bin_request.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"bin_request","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/bins/{id}/requests","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"since","or":"since","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"token","or":"token","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"wait","or":"wait","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/api/bins/{id}/requests","q":{"exist":["id","token"]},"r":{},"s":[{"lit":"api"},{"lit":"bins"},{"var":"id"},{"lit":"requests"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"bin_request","name__orig":"bin_request","Name":"BinRequest","name_":"bin_request","name-":"bin-request","NAME":"BIN_REQUEST","index$":2}, {"active":true,"entity":"bin_request","key$":"BasicBinRequestFlow","kind":"basic","name":"BasicBinRequestFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"bin_request_ref01","srcdatavar":"bin_request_ref01_data","suffix":"_dt0"},"m":{"id":"bin_request01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-bin_request_ref01"}}],"index$":0}]}, 'BinRequest', {"GET /api/bins/{id}/requests":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"token","in":"query","required":true,"schema":{"type":"string"},"index$":1},{"name":"wait","in":"query","required":false,"description":"Seconds to block (max 25) until a request arrives — no polling loop.","schema":{"type":"integer"},"index$":2},{"name":"since","in":"query","required":false,"description":"Only return/wake for requests with ts greater than this.","schema":{"type":"integer"},"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let bin_request_ref01_data = Object.values(setup.data.existing.bin_request)[0] as any

    // LOAD
    const bin_request_ref01_ent = client.BinRequest()
    const bin_request_ref01_match_dt0: any = {}
    bin_request_ref01_match_dt0.id = bin_request_ref01_data.id
    const bin_request_ref01_data_dt0 = (await bin_request_ref01_ent.load(bin_request_ref01_match_dt0)).data()
    assert(bin_request_ref01_data_dt0.id === bin_request_ref01_data.id)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/bin_request/BinRequestTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CatchrHttpSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['bin_request01','bin_request02','bin_request03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CATCHR_HTTP_TEST_BIN_REQUEST_ENTID': idmap,
    'CATCHR_HTTP_TEST_LIVE': 'FALSE',
    'CATCHR_HTTP_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CATCHR_HTTP_TEST_BIN_REQUEST_ENTID']

  const live = 'TRUE' === env.CATCHR_HTTP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CATCHR_HTTP_TEST_BIN_REQUEST_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CatchrHttpSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CATCHR_HTTP_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
