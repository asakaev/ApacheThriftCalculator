/**
 * @namespace
 */
var ext = {};


/**
 * @constructor
 * @implements {tio.process.IWorker}
 * @param {string} configUrl
 */
ext.Application = function(configUrl) {};


/**
 * @inheritDoc
 */
ext.Application.prototype.init = function(complete, cancel) {};


/**
 * @inheritDoc
 */
ext.Application.prototype.destroy = function(complete, cancel) {};


/**
 * @inheritDoc
 */
ext.Application.prototype.router = function() {};


/**
 * @inheritDoc
 */
ext.Application.prototype.protocol = function() {};


/**
 * @constructor
 * @extends {calc.api.Handler}
 */
ext.Handler = function() {};


/**
 * @inheritDoc
 */
ext.Handler.prototype.ping = function () {};


/**
 * @inheritDoc
 */
ext.Handler.prototype.add = function (num1, num2) {};




