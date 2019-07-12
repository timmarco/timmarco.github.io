/* exported CartesianFunction */
function CartesianFunction(options) {
  const plottedFunction = this;

  init(options);

  return plottedFunction;

  function init(options) {
    plottedFunction.options = options;

    _required();
    _defaults();

    plottedFunction
      .addPath()
      .update();

  }

  function _required() {
    plottedFunction.plot = options.plot;
    plottedFunction.function = options.function;
  }

  function _defaults() {

    plottedFunction
      .defaulter("stroke","blue")
      .defaulter("strokeWidth",2)
      .defaulter("strokeDashArray","1,0");

  }
}
