module.exports = methodify;

function methodify (object, functions) {
  var key;

  for (key in functions) {
    if (typeof functions[key] != 'function') continue;
    object[key] = set(object, functions[key]);
  }

  return object;
}

function set (object, method) {
  return function(){
    var args = Array.prototype.slice.call(arguments);
    args.splice(0, 0, object);
    return method.apply(undefined, args);
  };
}
