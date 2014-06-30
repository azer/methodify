var test = require('prova');
var methodify = require("./");

test('takes functions and sets methods on specified object', function (t) {
  var product = {
    cost: 3,
    profit: 2,
    tax: 2
  };

  methodify(product, { ignore: 666, price: price }, {
    withDiscount: withDiscount,
    withNoProfit: withNoProfit
  });

  t.plan(3)
  t.equal(product.price(), 7);
  t.equal(product.withDiscount(), 5.5);
  t.notOk(product.ignore);

  function price (obj) {
    return obj.cost + obj.profit + obj.tax;
  }

  function withDiscount (obj) {
    return obj.withNoProfit() + 0.5;
  }

  function withNoProfit (obj) {
    return obj.cost + obj.tax;
  }
});
