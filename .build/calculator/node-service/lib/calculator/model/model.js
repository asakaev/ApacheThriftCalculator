

/**
 * @type {!calculator.model.IBuilder}
 */
calculator.model.__BUILDER =
    new calculator.model.Builder();


/**
 * @param {!calculator.model.IBuilder} builder .
 */
calculator.model.setModelBuilder = function(builder) {
  calculator.model.__BUILDER = builder;
};


/**
 * @return {!calculator.model.IBuilder}
 */
calculator.model.getModelBuilder = function() {
  return calculator.model.__BUILDER;
};
