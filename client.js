var thrift = require('thrift');
var Calculator = require('./gen-nodejs/Calculator');
var ttypes = require('./gen-nodejs/calculator_types');

//transport = thrift.TBufferedTransport();
//protocol = thrift.TJSONProtocol();


var options = {
  transport: thrift.TBufferedTransport,
  protocol: thrift.TJSONProtocol,
  path: '/',
  headers: {"Connection": "close"}
};

var connection = thrift.createHttpConnection("localhost", 13370, options);
var client = thrift.createHttpClient(Calculator, connection);

//
//
//var connection = thrift.createHttpConnection('127.0.0.1', 1337, {
//  transport: transport,
//  protocol: protocol
//});

connection.on('error', function (err) {
  assert(false, err);
});








client.ping(function (err, response) {
  console.log('ping()');
});


client.add(1, 1, function (err, response) {
  console.log("1+1=" + response);
  //connection.end();
});


setTimeout(function() {
  console.log('finish');
}, 5000);