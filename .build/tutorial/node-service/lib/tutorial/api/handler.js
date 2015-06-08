


/**
 * @constructor
 * @implements {tutorial.api.IHandler}
 */
tutorial.api.Handler = function() {

  /**
   * @type {!yaa.api.ISession}
   */
  this.__session = yaa.api.session();
};


/**
 * @inheritDoc
 */
tutorial.api.Handler.prototype.ping =
    function() {
  return yaa.error('Not implemented.');
};


/**
 * @inheritDoc
 */
tutorial.api.Handler.prototype.add =
    function(
    num1, 
    num2) {
  return yaa.error('Not implemented.');
};


/**
 * @inheritDoc
 */
tutorial.api.Handler.prototype.calculate =
    function(
    logid, 
    w) {
  return yaa.error('Not implemented.');
};


/**
 * @inheritDoc
 */
tutorial.api.Handler.prototype.zip =
    function() {
  return yaa.error('Not implemented.');
};


/**
 * @inheritDoc
 */
tutorial.api.Handler.prototype.session =
    function(complete, cancel, call) {
  complete(this.__session);
};


/**
 * @inheritDoc
 */
tutorial.api.Handler.prototype.stateful = function(call) {
  return false;
};


/**
 * @inheritDoc
 */
tutorial.api.Handler.prototype.task = function(call) {
  return null;
};
