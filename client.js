var thrift = require('thrift');
var Calculator = require('./gen-nodejs/Calculator');
var ttypes = require('./gen-nodejs/calculator_types');

transport = thrift.TBufferedTransport();
protocol = thrift.TBinaryProtocol();

var connection = thrift.createConnection("localhost", 1337, {
  transport: transport,
  protocol: protocol
});

connection.on('error', function (err) {
  assert(false, err);
});

var client = thrift.createClient(Calculator, connection);

client.ping(function (err, response) {
  console.log('ping()');
});


client.add(1, 1, function (err, response) {
  console.log("1+1=" + response);
  connection.end();
});