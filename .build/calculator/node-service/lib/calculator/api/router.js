


/**
 * @constructor
 * @implements {tio.listener.IRouter}
 * @param {!calculator.api.IHandler=} opt_handler
 */
calculator.api.Router = function(opt_handler) {

  /**
   * @type {!calculator.api.IHandler}
   */
  this.__handler = opt_handler || new calculator.api.Handler();
};


/**
 * @inheritDoc
 */
calculator.api.Router.prototype.session =
    function(complete, cancel, call) {
  this.__handler.session(complete, cancel || yaa.cancel, call);
};


/**
 * @inheritDoc
 */
calculator.api.Router.prototype.step = function(call) {
  var args = call.getArgs();
  var task = this.__handler.task(call);
  if (task !== null) {
    return task;
  }

  switch (call.getName()) {
    case calculator.Api.PING:
      return this.__handler.ping();

    case calculator.Api.ADD:
      return this.__handler.add(
          args[0],
          args[1]);

  }

  return yaa.error('Unknown call.');
};


/**
 * @inheritDoc
 */
calculator.api.Router.prototype.stateful = function(call) {
  return this.__handler.stateful(call);
};
