


/**
 * @constructor
 * @implements {tio.listener.IRouter}
 * @param {!tutorial.api.IHandler=} opt_handler
 */
tutorial.api.Router = function(opt_handler) {

  /**
   * @type {!tutorial.api.IHandler}
   */
  this.__handler = opt_handler || new tutorial.api.Handler();
};


/**
 * @inheritDoc
 */
tutorial.api.Router.prototype.session =
    function(complete, cancel, call) {
  this.__handler.session(complete, cancel || yaa.cancel, call);
};


/**
 * @inheritDoc
 */
tutorial.api.Router.prototype.step = function(call) {
  var args = call.getArgs();
  var task = this.__handler.task(call);
  if (task !== null) {
    return task;
  }

  switch (call.getName()) {
    case tutorial.Api.PING:
      return this.__handler.ping();

    case tutorial.Api.ADD:
      return this.__handler.add(
          args[0],
          args[1]);

    case tutorial.Api.CALCULATE:
      return this.__handler.calculate(
          args[0],
          args[1]);

    case tutorial.Api.ZIP:
      return this.__handler.zip();

  }

  return yaa.error('Unknown call.');
};


/**
 * @inheritDoc
 */
tutorial.api.Router.prototype.stateful = function(call) {
  return this.__handler.stateful(call);
};
