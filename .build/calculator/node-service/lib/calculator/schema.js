


/**
 * @constructor
 * @implements {thrift.ISchema}
 */
calculator.Schema = function() {

  /**
   * @type {!Object}
   */
  this.__structures = {
  };

  /**
   * @type {!Object}
   */
  this.__methods = {
    'ping': new thrift.definition.Method(
        {
        }
    ),
    'add': new thrift.definition.Method(
        {
          '1': new thrift.definition.Field('num1', 1,
              thrift.definition.Type.I32),
          '2': new thrift.definition.Field('num2', 2,
              thrift.definition.Type.I32)
        },
        new thrift.definition.FullType(
            thrift.definition.Type.I32)
    )
  };
};


/**
 * @inheritDoc
 */
calculator.Schema.prototype.getStructureDefinition =
    function(name) {
  return this.__structures[name] || null;
};


/**
 * @inheritDoc
 */
calculator.Schema.prototype.getMethodDefinition =
    function(name) {
  return this.__methods[name] || null;
};


/**
 * @inheritDoc
 */
calculator.Schema.prototype.createStructure =
    function(name, str) {

  return str;
};
