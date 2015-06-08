

/**
 * @param {string} type
 * @param {number} port
 * @param {string} host
 */
tutorial.client.init = function(type, port, host) {
  tutorial.client.__type = type;
  tio.client.init(port, host);
};


/**
 * @param {!yaa.CompleteHandler} complete
 * @param {!yaa.ErrorHandler} cancel

   */
tutorial.client.ping =
    function(complete, cancel) {

  tutorial.client.__call(
      complete, cancel, tutorial.Api.PING, arguments);
};


/**
 * @param {!yaa.CompleteHandler} complete
 * @param {!yaa.ErrorHandler} cancel

   * @param {!number} num1

   * @param {!number} num2

   */
tutorial.client.add =
    function(complete, cancel,
    num1,
    num2) {

  tutorial.client.__call(
      complete, cancel, tutorial.Api.ADD, arguments);
};


/**
 * @param {!yaa.CompleteHandler} complete
 * @param {!yaa.ErrorHandler} cancel

   * @param {!number} logid

   * @param {!tutorial.model.IWork} w

   */
tutorial.client.calculate =
    function(complete, cancel,
    logid,
    w) {

  tutorial.client.__call(
      complete, cancel, tutorial.Api.CALCULATE, arguments);
};


/**
 * @param {!yaa.CompleteHandler} complete
 * @param {!yaa.ErrorHandler} cancel

   */
tutorial.client.zip =
    function(complete, cancel) {

  tutorial.client.__call(
      complete, cancel, tutorial.Api.ZIP, arguments);
};


/**
 * @type {number}
 */
tutorial.client.__seqid = 0;


/**
 * @type {string}
 */
tutorial.client.__type = '';


/**
 * @type {yaa.Step}
 */
tutorial.client.__session = null;


/**
 * @param {!yaa.CompleteHandler} complete
 * @param {!yaa.ErrorHandler} cancel
 * @param {string} name
 * @param {!Arguments} args
 */
tutorial.client.__call = function(complete, cancel, name, args) {
  if (tutorial.client.__session === null) {
    tutorial.client.__session =
        yaa.api.client.session(tio.client.http(tutorial.protocol(),
            tutorial.NAME, tutorial.VERSION,
                tutorial.client.__type) || yaa.nop());
  }

  tutorial.client.__session.call(null, complete, cancel,
      new tio.thrift.Message(tutorial.client.__seqid += 1,
          name, Array.prototype.slice.call(args, 2), {}));
};






