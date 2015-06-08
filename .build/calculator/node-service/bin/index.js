var yaa = require('node-yaa');
var tio = require('node-tio');
var thrift = require('node-thrift');

/**
 * @namespace
 */
var calculator = {};


/**
 * @namespace
 */
calculator.api = {};


/**
 * @namespace
 */
calculator.client = {};


/**
 * @namespace
 */
calculator.model = {};


/**
 * @type {string}
 */
calculator.NAME = 'calculator';


/**
 * @type {string}
 */
calculator.VERSION = '0.0.40';


/**
 * @return {!thrift.protocol.IProtocol}
 */
calculator.protocol = function() {
  if (calculator.__protocol === null) {
    calculator.__protocol = new thrift.protocol.Json(new calculator.Schema());
  }

  return calculator.__protocol;
};


/**
 * @param {number} port
 * @param {string} host
 * @param {!tio.process.IWorker} worker
 */
calculator.init = function(port, host, worker) {
  tio.process.init(
      new tio.process.Endpoint(port, host),
      new tio.process.Worker(worker));
};


/**
 *
 */
calculator.reload = function() {
  tio.process.reload();
};


/**
 *
 */
calculator.destroy = function() {
  tio.process.destroy();
};


/**
 * @type {thrift.protocol.IProtocol}
 */
calculator.__protocol = null;




/**
 * @constructor
 * @implements {thrift.ISchema}
 */
calculator.Schema = function() {

  /**
   * @type {!Object}
   */
  this.__structures = {
  };

  /**
   * @type {!Object}
   */
  this.__methods = {
    'ping': new thrift.definition.Method(
        {
        }
    ),
    'add': new thrift.definition.Method(
        {
          '1': new thrift.definition.Field('num1', 1,
              thrift.definition.Type.I32),
          '2': new thrift.definition.Field('num2', 2,
              thrift.definition.Type.I32)
        },
        new thrift.definition.FullType(
            thrift.definition.Type.I32)
    )
  };
};


/**
 * @inheritDoc
 */
calculator.Schema.prototype.getStructureDefinition =
    function(name) {
  return this.__structures[name] || null;
};


/**
 * @inheritDoc
 */
calculator.Schema.prototype.getMethodDefinition =
    function(name) {
  return this.__methods[name] || null;
};


/**
 * @inheritDoc
 */
calculator.Schema.prototype.createStructure =
    function(name, str) {

  return str;
};


/**
 * @param {string} type
 * @param {number} port
 * @param {string} host
 */
calculator.client.init = function(type, port, host) {
  calculator.client.__type = type;
  tio.client.init(port, host);
};


/**
 * @param {!yaa.CompleteHandler} complete
 * @param {!yaa.ErrorHandler} cancel

   */
calculator.client.ping =
    function(complete, cancel) {

  calculator.client.__call(
      complete, cancel, calculator.Api.PING, arguments);
};


/**
 * @param {!yaa.CompleteHandler} complete
 * @param {!yaa.ErrorHandler} cancel

   * @param {!number} num1

   * @param {!number} num2

   */
calculator.client.add =
    function(complete, cancel,
    num1,
    num2) {

  calculator.client.__call(
      complete, cancel, calculator.Api.ADD, arguments);
};


/**
 * @type {number}
 */
calculator.client.__seqid = 0;


/**
 * @type {string}
 */
calculator.client.__type = '';


/**
 * @type {yaa.Step}
 */
calculator.client.__session = null;


/**
 * @param {!yaa.CompleteHandler} complete
 * @param {!yaa.ErrorHandler} cancel
 * @param {string} name
 * @param {!Arguments} args
 */
calculator.client.__call = function(complete, cancel, name, args) {
  if (calculator.client.__session === null) {
    calculator.client.__session =
        yaa.api.client.session(tio.client.http(calculator.protocol(),
            calculator.NAME, calculator.VERSION,
                calculator.client.__type) || yaa.nop());
  }

  calculator.client.__session.call(null, complete, cancel,
      new tio.thrift.Message(calculator.client.__seqid += 1,
          name, Array.prototype.slice.call(args, 2), {}));
};








/**
 * @enum {string}
 */
calculator.Api = {
  'PING': 'ping',
  'ADD': 'add'
};



/**
 * @interface
 */
calculator.api.IHandler = function() {};


/**
 *
 * @return {!yaa.Step}
 */
calculator.api.IHandler.prototype.ping =
    function() {};


/**
 * @param {!number} num1
 * @param {!number} num2
 *
 * @return {!yaa.Step}
 */
calculator.api.IHandler.prototype.add =
    function(
    num1, 
    num2) {};


/**
 * @param {function(!yaa.api.ISession)} complete
 * @param {!yaa.ErrorHandler} cancel
 * @param {!tio.thrift.Message} call
 */
calculator.api.IHandler.prototype.session =
    function(complete, cancel, call) {};


/**
 * @param {!tio.thrift.Message} call
 * @return {boolean}
 */
calculator.api.IHandler.prototype.stateful = function(call) {};


/**
 * @param {!tio.thrift.Message} call
 * @return {yaa.Step}
 */
calculator.api.IHandler.prototype.task = function(call) {};



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



/**
 * @interface
 */
calculator.model.IBuilder = function() {
};




/**
 * @constructor
 * @implements {calculator.model.IBuilder}
 */
calculator.model.Builder = function() {
};



/**
 * @type {!calculator.model.IBuilder}
 */
calculator.model.__BUILDER =
    new calculator.model.Builder();


/**
 * @param {!calculator.model.IBuilder} builder .
 */
calculator.model.setModelBuilder = function(builder) {
  calculator.model.__BUILDER = builder;
};


/**
 * @return {!calculator.model.IBuilder}
 */
calculator.model.getModelBuilder = function() {
  return calculator.model.__BUILDER;
};

module.exports = calculator;
