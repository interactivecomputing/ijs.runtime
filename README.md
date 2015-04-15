# ijs.runtime

A set of helper methods and functionality for use in ijs notebooks, but do not
depend on any of the notebook functionality itself.

These will constitute the ijs runtime, an implicit dependency for code that is
authored in javascript notebooks.

## Example - Async

A lot of APIs in node.js complete asynchronously using a callback pattern.
You can wrap these into a promise-style pattern, effectively returning a
promise from within code inside your notebook cells. The ijs runtime provides a
helper to do so.

    _.async(function(deferred) {
      _.request('http://www.example.org', function(err, response) {
        console.log('Status Code: %d', response.statusCode);
        console.log('Page Title: %s',
                    response.body.match(/\\<title\\>([^\\<]*)\\<\\/title\\>/)[1]);

        if (response.statusCode == 200) {
          deferred.resolve(response.body);
        }
        else {
          deferred.reject(new Error('Failed'));
        }
      })
    });


