// index.js
// Defines the IJavaScript runtime API
//

var q = require('q'),
    request = require('request');

// Turn on improved stack reporting
q.longStackSupport = false;

// Enables running some asynchronous code.
// It provides a deferred object to the specified function that can be resolved
// or rejected upon async completion, and returns a promise representing that
// async result.
function runAsync(fn) {
  var deferred = q.defer();

  fn(deferred);
  return deferred.promise;
}


module.exports = {
  async: runAsync,
  q: q,
  request: request
};
