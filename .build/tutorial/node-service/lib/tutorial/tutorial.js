

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

