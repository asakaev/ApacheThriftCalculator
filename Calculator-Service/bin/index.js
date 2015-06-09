var util = require('node-util');
var yaa = require('node-yaa');
var tio = require('node-tio');
var calc = require('calculator');
//var fs = require('fs');


/**
 * @namespace
 */
var ext = {};



/**
 * @constructor
 * @implements {tio.process.IWorker}
 * @param {string} configUrl
 */
ext.Application = function(configUrl) {

  /**
   * @type {string}
   */
  this.__configUrl = configUrl;

  /**
   * @type {!prof.api.Router}
   */
  this.__router = new calc.api.Router(new ext.Handler());

  /**
   * @type {!tio.listener.IProtocol}
   */
  this.__protocol = new tio.thrift.Protocol(calc.protocol());
};


/**
 * @inheritDoc
 */
ext.Application.prototype.init = function(complete, cancel) {
  complete();
};


/**
 * @inheritDoc
 */
ext.Application.prototype.destroy = function(complete, cancel) {
  complete();
};


/**
 * @inheritDoc
 */
ext.Application.prototype.router = function() {
  return this.__router;
};


/**
 * @inheritDoc
 */
ext.Application.prototype.protocol = function() {
  return this.__protocol;
};


/**
 * @constructor
 * @extends {calc.api.Handler}
 */
ext.Handler = function() {
  calc.api.Handler.call(this);
};

util.inherits(ext.Handler, calc.api.Handler);


/**
 * @inheritDoc
 */
ext.Handler.prototype.ping = function () {
  console.log('ping()');
  return yaa.nop();
};


/**
 * @inheritDoc
 */
ext.Handler.prototype.add = function (num1, num2) {
  var res = num1 + num2;
  return yaa.insert(res);
};

process.on('uncaughtException', function(err) {
  console.log('Caught exception', err);
  console.log(err.stack);
});

process.addListener('SIGHUP', calc.reload);
process.addListener('SIGINT', calc.destroy);
process.addListener('SIGTERM', calc.destroy);

calc.init(process.env['PORT'] || 13370,
        process.env['HOST'] || '0.0.0.0',
        new ext.Application(process.env['CONFIG']));
