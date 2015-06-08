

/**
 * @type {!tutorial.model.IBuilder}
 */
tutorial.model.__BUILDER =
    new tutorial.model.Builder();


/**
 * @param {!tutorial.model.IBuilder} builder .
 */
tutorial.model.setModelBuilder = function(builder) {
  tutorial.model.__BUILDER = builder;
};


/**
 * @return {!tutorial.model.IBuilder}
 */
tutorial.model.getModelBuilder = function() {
  return tutorial.model.__BUILDER;
};
