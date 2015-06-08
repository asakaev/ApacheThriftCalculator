


/**
 * @constructor
 * @implements {calculator.api.IHandler}
 */
calculator.api.Handler = function() {

  /**
   * @type {!yaa.api.ISession}
   */
  this.__session = yaa.api.session();
};


/**
 * @inheritDoc
 */
calculator.api.Handler.prototype.ping =
    function() {
  return yaa.error('Not implemented.');
};


/**
 * @inheritDoc
 */
calculator.api.Handler.prototype.add =
    function(
    num1, 
    num2) {
  return yaa.error('Not implemented.');
};


/**
 * @inheritDoc
 */
calculator.api.Handler.prototype.session =
    function(complete, cancel, call) {
  complete(this.__session);
};


/**
 * @inheritDoc
 */
calculator.api.Handler.prototype.stateful = function(call) {
  return false;
};


/**
 * @inheritDoc
 */
calculator.api.Handler.prototype.task = function(call) {
  return null;
};
