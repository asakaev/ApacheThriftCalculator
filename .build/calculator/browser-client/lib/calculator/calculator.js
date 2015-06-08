

var types = {};


/**
 * @namespace
 */
var calculator = {};


/**
 * @namespace
 */
calculator.build = {};


/**
 * @type {string}
 */
calculator.NAME = 'Calculator';


/**
 * @type {string}
 */
calculator.VERSION = '0.0.40';


/**
 * @type {string}
 */
calculator.ID = '000.001.001';


/**
 * @type {lt.CalculatorClient}
 */
calculator.__client = null;


/**
 * @param {string} url
 */
calculator.init = function(url) {
  calculator.__client = new calculator.CalculatorClient(
      new Thrift.Protocol(new Thrift.Transport(url, true)));
};


/**
 * @param {function(?*)} complete
 * @param {function(Error)} cancel
 */
calculator.ping =
    function(complete, cancel) {
  try {
    calculator.__client.ping(complete);

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
calculator.add =
    function(complete, cancel, num1, num2) {
  try {
    calculator.__client.add(num1, num2, complete);

  } catch (error) {
    cancel(error);
  }
};





