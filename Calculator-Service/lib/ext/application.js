


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