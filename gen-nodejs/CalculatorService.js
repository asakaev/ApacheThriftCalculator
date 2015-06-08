//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = require('./tutorial_types');
//HELPER FUNCTIONS AND STRUCTURES

CalculatorService_ping_args = function(args) {
};
CalculatorService_ping_args.prototype = {};
CalculatorService_ping_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CalculatorService_ping_args.prototype.write = function(output) {
  output.writeStructBegin('CalculatorService_ping_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CalculatorService_ping_result = function(args) {
};
CalculatorService_ping_result.prototype = {};
CalculatorService_ping_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CalculatorService_ping_result.prototype.write = function(output) {
  output.writeStructBegin('CalculatorService_ping_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CalculatorService_add_args = function(args) {
  this.num1 = null;
  this.num2 = null;
  if (args) {
    if (args.num1 !== undefined) {
      this.num1 = args.num1;
    }
    if (args.num2 !== undefined) {
      this.num2 = args.num2;
    }
  }
};
CalculatorService_add_args.prototype = {};
CalculatorService_add_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.num1 = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.num2 = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CalculatorService_add_args.prototype.write = function(output) {
  output.writeStructBegin('CalculatorService_add_args');
  if (this.num1 !== null && this.num1 !== undefined) {
    output.writeFieldBegin('num1', Thrift.Type.I32, 1);
    output.writeI32(this.num1);
    output.writeFieldEnd();
  }
  if (this.num2 !== null && this.num2 !== undefined) {
    output.writeFieldBegin('num2', Thrift.Type.I32, 2);
    output.writeI32(this.num2);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CalculatorService_add_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
CalculatorService_add_result.prototype = {};
CalculatorService_add_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CalculatorService_add_result.prototype.write = function(output) {
  output.writeStructBegin('CalculatorService_add_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CalculatorService_calculate_args = function(args) {
  this.logid = null;
  this.w = null;
  if (args) {
    if (args.logid !== undefined) {
      this.logid = args.logid;
    }
    if (args.w !== undefined) {
      this.w = args.w;
    }
  }
};
CalculatorService_calculate_args.prototype = {};
CalculatorService_calculate_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.logid = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.w = new ttypes.Work();
        this.w.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CalculatorService_calculate_args.prototype.write = function(output) {
  output.writeStructBegin('CalculatorService_calculate_args');
  if (this.logid !== null && this.logid !== undefined) {
    output.writeFieldBegin('logid', Thrift.Type.I32, 1);
    output.writeI32(this.logid);
    output.writeFieldEnd();
  }
  if (this.w !== null && this.w !== undefined) {
    output.writeFieldBegin('w', Thrift.Type.STRUCT, 2);
    this.w.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CalculatorService_calculate_result = function(args) {
  this.success = null;
  this.ouch = null;
  if (args instanceof ttypes.InvalidOperation) {
    this.ouch = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ouch !== undefined) {
      this.ouch = args.ouch;
    }
  }
};
CalculatorService_calculate_result.prototype = {};
CalculatorService_calculate_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ouch = new ttypes.InvalidOperation();
        this.ouch.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CalculatorService_calculate_result.prototype.write = function(output) {
  output.writeStructBegin('CalculatorService_calculate_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  if (this.ouch !== null && this.ouch !== undefined) {
    output.writeFieldBegin('ouch', Thrift.Type.STRUCT, 1);
    this.ouch.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CalculatorService_zip_args = function(args) {
};
CalculatorService_zip_args.prototype = {};
CalculatorService_zip_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CalculatorService_zip_args.prototype.write = function(output) {
  output.writeStructBegin('CalculatorService_zip_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CalculatorService_zip_result = function(args) {
};
CalculatorService_zip_result.prototype = {};
CalculatorService_zip_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CalculatorService_zip_result.prototype.write = function(output) {
  output.writeStructBegin('CalculatorService_zip_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CalculatorServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this.seqid = 0;
    this._reqs = {};
};
CalculatorServiceClient.prototype = {};
CalculatorServiceClient.prototype.ping = function(callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_ping();
};

CalculatorServiceClient.prototype.send_ping = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('ping', Thrift.MessageType.CALL, this.seqid);
  var args = new CalculatorService_ping_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

CalculatorServiceClient.prototype.recv_ping = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new CalculatorService_ping_result();
  result.read(input);
  input.readMessageEnd();

  callback(null)
};
CalculatorServiceClient.prototype.add = function(num1, num2, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_add(num1, num2);
};

CalculatorServiceClient.prototype.send_add = function(num1, num2) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('add', Thrift.MessageType.CALL, this.seqid);
  var args = new CalculatorService_add_args();
  args.num1 = num1;
  args.num2 = num2;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

CalculatorServiceClient.prototype.recv_add = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new CalculatorService_add_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('add failed: unknown result');
};
CalculatorServiceClient.prototype.calculate = function(logid, w, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_calculate(logid, w);
};

CalculatorServiceClient.prototype.send_calculate = function(logid, w) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('calculate', Thrift.MessageType.CALL, this.seqid);
  var args = new CalculatorService_calculate_args();
  args.logid = logid;
  args.w = w;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

CalculatorServiceClient.prototype.recv_calculate = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new CalculatorService_calculate_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ouch) {
    return callback(result.ouch);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('calculate failed: unknown result');
};
CalculatorServiceClient.prototype.zip = function(callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_zip();
};

CalculatorServiceClient.prototype.send_zip = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('zip', Thrift.MessageType.CALL, this.seqid);
  var args = new CalculatorService_zip_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};
CalculatorServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
CalculatorServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.Exception, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

CalculatorServiceProcessor.prototype.process_ping = function(seqid, input, output) {
  var args = new CalculatorService_ping_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.ping(function (err, result) {
    var result = new CalculatorService_ping_result((err != null ? err : {success: result}));
    output.writeMessageBegin("ping", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

CalculatorServiceProcessor.prototype.process_add = function(seqid, input, output) {
  var args = new CalculatorService_add_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.add(args.num1, args.num2, function (err, result) {
    var result = new CalculatorService_add_result((err != null ? err : {success: result}));
    output.writeMessageBegin("add", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

CalculatorServiceProcessor.prototype.process_calculate = function(seqid, input, output) {
  var args = new CalculatorService_calculate_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.calculate(args.logid, args.w, function (err, result) {
    var result = new CalculatorService_calculate_result((err != null ? err : {success: result}));
    output.writeMessageBegin("calculate", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

CalculatorServiceProcessor.prototype.process_zip = function(seqid, input, output) {
  var args = new CalculatorService_zip_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.zip()
}

