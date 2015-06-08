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
tutorial.NAME;


/**
 * @type {string}
 */
tutorial.VERSION;


/**
 * @type {string}
 */
tutorial.ID;


/**
 * @param {string} url
 */
tutorial.init = function(url) {};


/**
 * @param {function(?*)} complete
 * @param {function(Error)} cancel
 */
tutorial.ping =
    function(complete, cancel) {};


/**
 * @param {function(?number)} complete
 * @param {function(Error)} cancel
 * @param {!number} num1
 * @param {!number} num2
 */
tutorial.add =
    function(complete, cancel, num1, num2) {};


/**
 * @param {function(?number)} complete
 * @param {function(Error)} cancel
 * @param {!number} logid
 * @param {!types.Work} w
 */
tutorial.calculate =
    function(complete, cancel, logid, w) {};


/**
 * @param {function(?*)} complete
 * @param {function(Error)} cancel
 */
tutorial.zip =
    function(complete, cancel) {};




