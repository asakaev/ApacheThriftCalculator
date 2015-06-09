


/**
 * @constructor
 * @extends {calc.api.Handler}
 */
ext.Handler = function() {
  calc.api.Handler.call(this);
};

util.inherits(ext.Handler, calc.api.Handler);


/**
 * @inheritDoc
 */
ext.Handler.prototype.ping = function () {
  console.log('ping()');
  return yaa.nop();
};


/**
 * @inheritDoc
 */
ext.Handler.prototype.add = function (num1, num2) {
  var res = num1 + num2;
  return yaa.insert(res);
};
