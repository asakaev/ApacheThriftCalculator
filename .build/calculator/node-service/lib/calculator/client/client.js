

/**
 * @param {string} type
 * @param {number} port
 * @param {string} host
 */
calculator.client.init = function(type, port, host) {
  calculator.client.__type = type;
  tio.client.init(port, host);
};


/**
 * @param {!yaa.CompleteHandler} complete
 * @param {!yaa.ErrorHandler} cancel

   */
calculator.client.ping =
    function(complete, cancel) {

  calculator.client.__call(
      complete, cancel, calculator.Api.PING, arguments);
};


/**
 * @param {!yaa.CompleteHandler} complete
 * @param {!yaa.ErrorHandler} cancel

   * @param {!number} num1

   * @param {!number} num2

   */
calculator.client.add =
    function(complete, cancel,
    num1,
    num2) {

  calculator.client.__call(
      complete, cancel, calculator.Api.ADD, arguments);
};


/**
 * @type {number}
 */
calculator.client.__seqid = 0;


/**
 * @type {string}
 */
calculator.client.__type = '';


/**
 * @type {yaa.Step}
 */
calculator.client.__session = null;


/**
 * @param {!yaa.CompleteHandler} complete
 * @param {!yaa.ErrorHandler} cancel
 * @param {string} name
 * @param {!Arguments} args
 */
calculator.client.__call = function(complete, cancel, name, args) {
  if (calculator.client.__session === null) {
    calculator.client.__session =
        yaa.api.client.session(tio.client.http(calculator.protocol(),
            calculator.NAME, calculator.VERSION,
                calculator.client.__type) || yaa.nop());
  }

  calculator.client.__session.call(null, complete, cancel,
      new tio.thrift.Message(calculator.client.__seqid += 1,
          name, Array.prototype.slice.call(args, 2), {}));
};






