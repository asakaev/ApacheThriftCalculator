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
calculator.NAME;


/**
 * @type {string}
 */
calculator.VERSION;


/**
 * @type {string}
 */
calculator.ID;


/**
 * @param {string} url
 */
calculator.init = function(url) {};


/**
 * @param {function(?*)} complete
 * @param {function(Error)} cancel
 */
calculator.ping =
    function(complete, cancel) {};


/**
 * @param {function(?number)} complete
 * @param {function(Error)} cancel
 * @param {!number} num1
 * @param {!number} num2
 */
calculator.add =
    function(complete, cancel, num1, num2) {};




