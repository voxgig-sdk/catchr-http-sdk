

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


describe('BinPublicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CATCHR_HTTP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CATCHR_HTTP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CatchrHttpSDK.test()
    const ent = testsdk.BinPublic()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CatchrHttpSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.BinPublic().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CATCHR_HTTP_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bin_public.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"bin_public","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/bins/{id}/public.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/bins/{id}/public.json","q":{"exist":["id"]},"r":{},"s":[{"lit":"api"},{"lit":"bins"},{"var":"id"},{"lit":"public.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"bin_public","name__orig":"bin_public","Name":"BinPublic","name_":"bin_public","name-":"bin-public","NAME":"BIN_PUBLIC","index$":1}, {"active":true,"entity":"bin_public","key$":"BasicBinPublicFlow","kind":"basic","name":"BasicBinPublicFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"bin_public_ref01","srcdatavar":"bin_public_ref01_data","suffix":"_dt0"},"m":{"id":"bin_public01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-bin_public_ref01"}}],"index$":0}]}, 'BinPublic', {"GET /api/bins/{id}/public.json":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let bin_public_ref01_data = Object.values(setup.data.existing.bin_public)[0] as any

    // LOAD
    const bin_public_ref01_ent = client.BinPublic()
    const bin_public_ref01_match_dt0: any = {}
    bin_public_ref01_match_dt0.id = bin_public_ref01_data.id
    const bin_public_ref01_data_dt0 = (await bin_public_ref01_ent.load(bin_public_ref01_match_dt0)).data()
    assert(bin_public_ref01_data_dt0.id === bin_public_ref01_data.id)


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
      '../../../../.sdk/test/entity/bin_public/BinPublicTestData.json')

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
    ['bin_public01','bin_public02','bin_public03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CATCHR_HTTP_TEST_BIN_PUBLIC_ENTID': idmap,
    'CATCHR_HTTP_TEST_LIVE': 'FALSE',
    'CATCHR_HTTP_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CATCHR_HTTP_TEST_BIN_PUBLIC_ENTID']

  const live = 'TRUE' === env.CATCHR_HTTP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CATCHR_HTTP_TEST_BIN_PUBLIC_ENTID']
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
  
