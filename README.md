## methodify

Take a set of functions and make them methods of specified object.

## Install

```bash
$ npm install methodify
```

## Usage

```js
methodify = require('methodify')

struct = {
  foo: 123,
  bar: 456
}

methodify(struct, {
  sum: sum,
  sub: sub
})

struct.sum()
// => 579

struct.sub()
// => -333

function sum (obj) {
  return obj.foo + obj.bar;
}

function sub (obj) {
  return obj.foo - obj.bar;
}
```
