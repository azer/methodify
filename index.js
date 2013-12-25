module.exports = methodify;
module.exports.wrap = wrap;
module.exports.wrapAll = wrapAll;

function methodify (object) {
  var key, set;

  var i = 0;
  var len = arguments.length;

  while (++i < len) {
    wrapAll(arguments[i], object, object);
  }

  return object;
}

function wrap (object, method) {
  return function(){
    var args = Array.prototype.slice.call(arguments);
    args.splice(0, 0, object);
    return method.apply(undefined, args);
  };
}

function wrapAll (functions, scope, target) {
  var key;
  for (key in functions) {
    if (typeof functions[key] != 'function') continue;

    if (target)
      target[key] = wrap(scope, functions[key]);
    else
      wrap(scope, functions[key]);
  }
}
