var thrift = require("thrift");
var Calculator = require("./gen-nodejs/Calculator");
var ttypes = require("./gen-nodejs/calculator_types");

var data = {};

var server = thrift.createServer(Calculator, {
  ping: function (result) {
    console.log("ping()");
    result(null);
  },

  add: function (n1, n2, result) {
    console.log("add(", n1, ",", n2, ")");
    result(null, n1 + n2);
  }

}, {});

server.listen(1337);