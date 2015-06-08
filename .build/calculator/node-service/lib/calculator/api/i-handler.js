


/**
 * @interface
 */
calculator.api.IHandler = function() {};


/**
 *
 * @return {!yaa.Step}
 */
calculator.api.IHandler.prototype.ping =
    function() {};


/**
 * @param {!number} num1
 * @param {!number} num2
 *
 * @return {!yaa.Step}
 */
calculator.api.IHandler.prototype.add =
    function(
    num1, 
    num2) {};


/**
 * @param {function(!yaa.api.ISession)} complete
 * @param {!yaa.ErrorHandler} cancel
 * @param {!tio.thrift.Message} call
 */
calculator.api.IHandler.prototype.session =
    function(complete, cancel, call) {};


/**
 * @param {!tio.thrift.Message} call
 * @return {boolean}
 */
calculator.api.IHandler.prototype.stateful = function(call) {};


/**
 * @param {!tio.thrift.Message} call
 * @return {yaa.Step}
 */
calculator.api.IHandler.prototype.task = function(call) {};
