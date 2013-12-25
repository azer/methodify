var methodify = require("./");

it('takes functions and sets methods on specified object', function(){
  var product = {
    cost: 3,
    profit: 2,
    tax: 2
  };

  methodify(product, { ignore: 666, price: price }, {
    withDiscount: withDiscount,
    withNoProfit: withNoProfit
  });

  expect(product.price()).to.equal(7);
  expect(product.withDiscount()).to.equal(5.5);
  expect(product.ignore).to.not.exist;

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
