module.exports = methodify;

function methodify (object) {
  var key, set;

  var i = 0;
  var len = arguments.length;

  while (++i < len) {
    set = arguments[i];

    for (key in set) {
      if (typeof set[key] != 'function') continue;
      object[key] = wrap(object, set[key]);
    }
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
