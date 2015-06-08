

var types = {};


/**
 * @namespace
 */
var tutorial = {};


/**
 * @namespace
 */
tutorial.build = {};


/**
 * @type {string}
 */
tutorial.NAME = 'CalculatorService';


/**
 * @type {string}
 */
tutorial.VERSION = '0.0.39';


/**
 * @type {string}
 */
tutorial.ID = '000.001.001';


/**
 * @type {lt.CalculatorServiceClient}
 */
tutorial.__client = null;


/**
 * @param {string} url
 */
tutorial.init = function(url) {
  tutorial.__client = new tutorial.CalculatorServiceClient(
      new Thrift.Protocol(new Thrift.Transport(url, true)));
};


/**
 * @param {function(?*)} complete
 * @param {function(Error)} cancel
 */
tutorial.ping =
    function(complete, cancel) {
  try {
    tutorial.__client.ping(complete);

  } catch (error) {
    cancel(error);
  }
};


/**
 * @param {function(?number)} complete
 * @param {function(Error)} cancel
 * @param {!number} num1
 * @param {!number} num2
 */
tutorial.add =
    function(complete, cancel, num1, num2) {
  try {
    tutorial.__client.add(num1, num2, complete);

  } catch (error) {
    cancel(error);
  }
};


/**
 * @param {function(?number)} complete
 * @param {function(Error)} cancel
 * @param {!number} logid
 * @param {!types.Work} w
 */
tutorial.calculate =
    function(complete, cancel, logid, w) {
  try {
    tutorial.__client.calculate(logid, w, complete);

  } catch (error) {
    cancel(error);
  }
};


/**
 * @param {function(?*)} complete
 * @param {function(Error)} cancel
 */
tutorial.zip =
    function(complete, cancel) {
  try {
    tutorial.__client.zip(complete);

  } catch (error) {
    cancel(error);
  }
};





