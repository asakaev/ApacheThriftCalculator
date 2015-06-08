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
tutorial.NAME;


/**
 * @type {string}
 */
tutorial.VERSION;


/**
 * @return {!thrift.protocol.IProtocol}
 */
tutorial.protocol = function() {};


/**
 * @param {number} port
 * @param {string} host
 * @param {!tio.process.IWorker} worker
 */
tutorial.init = function(port, host, worker) {};


/**
 *
 */
tutorial.reload = function() {};


/**
 *
 */
tutorial.destroy = function() {};


/**
 * @constructor
 * @implements {thrift.ISchema}
 */
tutorial.Schema = function() {};


/**
 * @inheritDoc
 */
tutorial.Schema.prototype.getStructureDefinition =
    function(name) {};


/**
 * @inheritDoc
 */
tutorial.Schema.prototype.getMethodDefinition =
    function(name) {};


/**
 * @inheritDoc
 */
tutorial.Schema.prototype.createStructure =
    function(name, str) {};


/**
 * @param {string} type
 * @param {number} port
 * @param {string} host
 */
tutorial.client.init = function(type, port, host) {};


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
tutorial.api.Handler = function() {};


/**
 * @inheritDoc
 */
tutorial.api.Handler.prototype.ping =
    function() {};


/**
 * @inheritDoc
 */
tutorial.api.Handler.prototype.add =
    function(
    num1, 
    num2) {};


/**
 * @inheritDoc
 */
tutorial.api.Handler.prototype.calculate =
    function(
    logid, 
    w) {};


/**
 * @inheritDoc
 */
tutorial.api.Handler.prototype.zip =
    function() {};


/**
 * @inheritDoc
 */
tutorial.api.Handler.prototype.session =
    function(complete, cancel, call) {};


/**
 * @inheritDoc
 */
tutorial.api.Handler.prototype.stateful = function(call) {};


/**
 * @inheritDoc
 */
tutorial.api.Handler.prototype.task = function(call) {};


/**
 * @constructor
 * @implements {tio.listener.IRouter}
 * @param {!tutorial.api.IHandler=} opt_handler
 */
tutorial.api.Router = function(opt_handler) {};


/**
 * @inheritDoc
 */
tutorial.api.Router.prototype.session =
    function(complete, cancel, call) {};


/**
 * @inheritDoc
 */
tutorial.api.Router.prototype.step = function(call) {};


/**
 * @inheritDoc
 */
tutorial.api.Router.prototype.stateful = function(call) {};


/**
 * @interface
 */
tutorial.model.IBuilder = function() {
};


/**
 * @constructor
 * @implements {tutorial.model.IBuilder}
 */
tutorial.model.Builder = function() {};


/**
 * @param {!tutorial.model.IBuilder} builder .
 */
tutorial.model.setModelBuilder = function(builder) {};


/**
 * @return {!tutorial.model.IBuilder}
 */
tutorial.model.getModelBuilder = function() {};




