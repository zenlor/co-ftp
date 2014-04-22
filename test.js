
var assert = require('assert')
var ftp = require('ftp')
var thunkify = require('./index')
var methods = thunkify.methods

var client = thunkify(new ftp())

function isThunk (obj) {
  assert(typeof obj === 'function', 'a thunk should be a function!')
  assert(typeof obj() === 'function', 'the result of a thunk should be a function!')
}

for (var i = 0; i < methods.length; i++) {
  isThunk(client[methods[i]])
}
