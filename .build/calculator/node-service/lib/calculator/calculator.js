

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

