var yaa = require('node-yaa');
var tio = require('node-tio');
var thrift = require('node-thrift');

/**
 * @namespace
 */
var tutorial = {};


/**
 * @namespace
 */
tutorial.api = {};


/**
 * @namespace
 */
tutorial.client = {};


/**
 * @namespace
 */
tutorial.model = {};


/**
 * @type {string}
 */
tutorial.NAME = 'calculator-service';


/**
 * @type {string}
 */
tutorial.VERSION = '0.0.39';


/**
 * @return {!thrift.protocol.IProtocol}
 */
tutorial.protocol = function() {
  if (tutorial.__protocol === null) {
    tutorial.__protocol = new thrift.protocol.Json(new tutorial.Schema());
  }

  return tutorial.__protocol;
};


/**
 * @param {number} port
 * @param {string} host
 * @param {!tio.process.IWorker} worker
 */
tutorial.init = function(port, host, worker) {
  tio.process.init(
      new tio.process.Endpoint(port, host),
      new tio.process.Worker(worker));
};


/**
 *
 */
tutorial.reload = function() {
  tio.process.reload();
};


/**
 *
 */
tutorial.destroy = function() {
  tio.process.destroy();
};


/**
 * @type {thrift.protocol.IProtocol}
 */
tutorial.__protocol = null;




/**
 * @constructor
 * @implements {thrift.ISchema}
 */
tutorial.Schema = function() {

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
    ),
    'calculate': new thrift.definition.Method(
        {
          '1': new thrift.definition.Field('logid', 1,
              thrift.definition.Type.I32),
          '2': new thrift.definition.Field('w', 2,
              'Work')
        },
        new thrift.definition.FullType(
            thrift.definition.Type.I32)
    ),
    'zip': new thrift.definition.Method(
        {
        }
    )
  };
};


/**
 * @inheritDoc
 */
tutorial.Schema.prototype.getStructureDefinition =
    function(name) {
  return this.__structures[name] || null;
};


/**
 * @inheritDoc
 */
tutorial.Schema.prototype.getMethodDefinition =
    function(name) {
  return this.__methods[name] || null;
};


/**
 * @inheritDoc
 */
tutorial.Schema.prototype.createStructure =
    function(name, str) {

  return str;
};


/**
 * @param {string} type
 * @param {number} port
 * @param {string} host
 */
tutorial.client.init = function(type, port, host) {
  tutorial.client.__type = type;
  tio.client.init(port, host);
};


/**
 * @param {!yaa.CompleteHandler} complete
 * @param {!yaa.ErrorHandler} cancel

   */
tutorial.client.ping =
    function(complete, cancel) {

  tutorial.client.__call(
      complete, cancel, tutorial.Api.PING, arguments);
};


/**
 * @param {!yaa.CompleteHandler} complete
 * @param {!yaa.ErrorHandler} cancel

   * @param {!number} num1

   * @param {!number} num2

   */
tutorial.client.add =
    function(complete, cancel,
    num1,
    num2) {

  tutorial.client.__call(
      complete, cancel, tutorial.Api.ADD, arguments);
};


/**
 * @param {!yaa.CompleteHandler} complete
 * @param {!yaa.ErrorHandler} cancel

   * @param {!number} logid

   * @param {!tutorial.model.IWork} w

   */
tutorial.client.calculate =
    function(complete, cancel,
    logid,
    w) {

  tutorial.client.__call(
      complete, cancel, tutorial.Api.CALCULATE, arguments);
};


/**
 * @param {!yaa.CompleteHandler} complete
 * @param {!yaa.ErrorHandler} cancel

   */
tutorial.client.zip =
    function(complete, cancel) {

  tutorial.client.__call(
      complete, cancel, tutorial.Api.ZIP, arguments);
};


/**
 * @type {number}
 */
tutorial.client.__seqid = 0;


/**
 * @type {string}
 */
tutorial.client.__type = '';


/**
 * @type {yaa.Step}
 */
tutorial.client.__session = null;


/**
 * @param {!yaa.CompleteHandler} complete
 * @param {!yaa.ErrorHandler} cancel
 * @param {string} name
 * @param {!Arguments} args
 */
tutorial.client.__call = function(complete, cancel, name, args) {
  if (tutorial.client.__session === null) {
    tutorial.client.__session =
        yaa.api.client.session(tio.client.http(tutorial.protocol(),
            tutorial.NAME, tutorial.VERSION,
                tutorial.client.__type) || yaa.nop());
  }

  tutorial.client.__session.call(null, complete, cancel,
      new tio.thrift.Message(tutorial.client.__seqid += 1,
          name, Array.prototype.slice.call(args, 2), {}));
};








/**
 * @enum {string}
 */
tutorial.Api = {
  'PING': 'ping',
  'ADD': 'add',
  'CALCULATE': 'calculate',
  'ZIP': 'zip'
};



/**
 * @interface
 */
tutorial.api.IHandler = function() {};


/**
 *
 * @return {!yaa.Step}
 */
tutorial.api.IHandler.prototype.ping =
    function() {};


/**
 * @param {!number} num1
 * @param {!number} num2
 *
 * @return {!yaa.Step}
 */
tutorial.api.IHandler.prototype.add =
    function(
    num1, 
    num2) {};


/**
 * @param {!number} logid
 * @param {!tutorial.model.IWork} w
 *
 * @return {!yaa.Step}
 */
tutorial.api.IHandler.prototype.calculate =
    function(
    logid, 
    w) {};


/**
 *
 * @return {!yaa.Step}
 */
tutorial.api.IHandler.prototype.zip =
    function() {};


/**
 * @param {function(!yaa.api.ISession)} complete
 * @param {!yaa.ErrorHandler} cancel
 * @param {!tio.thrift.Message} call
 */
tutorial.api.IHandler.prototype.session =
    function(complete, cancel, call) {};


/**
 * @param {!tio.thrift.Message} call
 * @return {boolean}
 */
tutorial.api.IHandler.prototype.stateful = function(call) {};


/**
 * @param {!tio.thrift.Message} call
 * @return {yaa.Step}
 */
tutorial.api.IHandler.prototype.task = function(call) {};



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



/**
 * @interface
 */
tutorial.model.IBuilder = function() {
};




/**
 * @constructor
 * @implements {tutorial.model.IBuilder}
 */
tutorial.model.Builder = function() {
};



/**
 * @type {!tutorial.model.IBuilder}
 */
tutorial.model.__BUILDER =
    new tutorial.model.Builder();


/**
 * @param {!tutorial.model.IBuilder} builder .
 */
tutorial.model.setModelBuilder = function(builder) {
  tutorial.model.__BUILDER = builder;
};


/**
 * @return {!tutorial.model.IBuilder}
 */
tutorial.model.getModelBuilder = function() {
  return tutorial.model.__BUILDER;
};

module.exports = tutorial;
