
var thunkify = require('thunkify')

module.exports = function (client) {
  for (var i = 0; i < methods.length; i++) {
    client[methods[i]] = thunkify(client[methods[i]]);
  }
  return client;
}

var methods = module.exports.methods = [
'list'
, 'get'
, 'put'
, 'rename'
, 'append'
, 'delete'
, 'cwd'
, 'abort'
, 'site'
, 'status'
, 'ascii'
, 'binary'
, 'mkdir'
, 'rmdir'
, 'cdup'
, 'system'
, 'listSafe'
, 'size'
, 'lastMod'
, 'restart'
]


