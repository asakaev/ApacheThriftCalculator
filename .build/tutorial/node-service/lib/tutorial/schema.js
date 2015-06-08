


/**
 * @constructor
 * @implements {thrift.ISchema}
 */
tutorial.Schema = function() {

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
    ),
    'calculate': new thrift.definition.Method(
        {
          '1': new thrift.definition.Field('logid', 1,
              thrift.definition.Type.I32),
          '2': new thrift.definition.Field('w', 2,
              'Work')
        },
        new thrift.definition.FullType(
            thrift.definition.Type.I32)
    ),
    'zip': new thrift.definition.Method(
        {
        }
    )
  };
};


/**
 * @inheritDoc
 */
tutorial.Schema.prototype.getStructureDefinition =
    function(name) {
  return this.__structures[name] || null;
};


/**
 * @inheritDoc
 */
tutorial.Schema.prototype.getMethodDefinition =
    function(name) {
  return this.__methods[name] || null;
};


/**
 * @inheritDoc
 */
tutorial.Schema.prototype.createStructure =
    function(name, str) {

  return str;
};
