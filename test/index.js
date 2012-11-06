var header  = require('..')
var through = require('through')

var assert  = require('assert')
var mac     = require('macgyver')().autoValidate()

var hs = header(through())

var onData = mac('onData').atLeast(1)
var onEnd  = mac('onEnd').once()

var header = {whatever: Math.random()}

onData.before(onEnd)

hs.on('data', onData)
hs.on('end', onEnd)

hs.on('header', mac(function (meta) {
  assert.deepEqual(meta, hs.meta)
  assert.deepEqual(meta, header)
  console.log(meta)
}).once().before(onData))

hs.setHeader(header)
hs.write('\noanehuasoneuh\noaeuhoaneuh\naoeunoeu')
hs.end()

