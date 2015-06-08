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
calculator.NAME;


/**
 * @type {string}
 */
calculator.VERSION;


/**
 * @return {!thrift.protocol.IProtocol}
 */
calculator.protocol = function() {};


/**
 * @param {number} port
 * @param {string} host
 * @param {!tio.process.IWorker} worker
 */
calculator.init = function(port, host, worker) {};


/**
 *
 */
calculator.reload = function() {};


/**
 *
 */
calculator.destroy = function() {};


/**
 * @constructor
 * @implements {thrift.ISchema}
 */
calculator.Schema = function() {};


/**
 * @inheritDoc
 */
calculator.Schema.prototype.getStructureDefinition =
    function(name) {};


/**
 * @inheritDoc
 */
calculator.Schema.prototype.getMethodDefinition =
    function(name) {};


/**
 * @inheritDoc
 */
calculator.Schema.prototype.createStructure =
    function(name, str) {};


/**
 * @param {string} type
 * @param {number} port
 * @param {string} host
 */
calculator.client.init = function(type, port, host) {};


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
calculator.api.Handler = function() {};


/**
 * @inheritDoc
 */
calculator.api.Handler.prototype.ping =
    function() {};


/**
 * @inheritDoc
 */
calculator.api.Handler.prototype.add =
    function(
    num1, 
    num2) {};


/**
 * @inheritDoc
 */
calculator.api.Handler.prototype.session =
    function(complete, cancel, call) {};


/**
 * @inheritDoc
 */
calculator.api.Handler.prototype.stateful = function(call) {};


/**
 * @inheritDoc
 */
calculator.api.Handler.prototype.task = function(call) {};


/**
 * @constructor
 * @implements {tio.listener.IRouter}
 * @param {!calculator.api.IHandler=} opt_handler
 */
calculator.api.Router = function(opt_handler) {};


/**
 * @inheritDoc
 */
calculator.api.Router.prototype.session =
    function(complete, cancel, call) {};


/**
 * @inheritDoc
 */
calculator.api.Router.prototype.step = function(call) {};


/**
 * @inheritDoc
 */
calculator.api.Router.prototype.stateful = function(call) {};


/**
 * @interface
 */
calculator.model.IBuilder = function() {
};


/**
 * @constructor
 * @implements {calculator.model.IBuilder}
 */
calculator.model.Builder = function() {};


/**
 * @param {!calculator.model.IBuilder} builder .
 */
calculator.model.setModelBuilder = function(builder) {};


/**
 * @return {!calculator.model.IBuilder}
 */
calculator.model.getModelBuilder = function() {};




