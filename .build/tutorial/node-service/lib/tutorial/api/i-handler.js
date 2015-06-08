


/**
 * @interface
 */
tutorial.api.IHandler = function() {};


/**
 *
 * @return {!yaa.Step}
 */
tutorial.api.IHandler.prototype.ping =
    function() {};


/**
 * @param {!number} num1
 * @param {!number} num2
 *
 * @return {!yaa.Step}
 */
tutorial.api.IHandler.prototype.add =
    function(
    num1, 
    num2) {};


/**
 * @param {!number} logid
 * @param {!tutorial.model.IWork} w
 *
 * @return {!yaa.Step}
 */
tutorial.api.IHandler.prototype.calculate =
    function(
    logid, 
    w) {};


/**
 *
 * @return {!yaa.Step}
 */
tutorial.api.IHandler.prototype.zip =
    function() {};


/**
 * @param {function(!yaa.api.ISession)} complete
 * @param {!yaa.ErrorHandler} cancel
 * @param {!tio.thrift.Message} call
 */
tutorial.api.IHandler.prototype.session =
    function(complete, cancel, call) {};


/**
 * @param {!tio.thrift.Message} call
 * @return {boolean}
 */
tutorial.api.IHandler.prototype.stateful = function(call) {};


/**
 * @param {!tio.thrift.Message} call
 * @return {yaa.Step}
 */
tutorial.api.IHandler.prototype.task = function(call) {};
