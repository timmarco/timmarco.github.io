/* global FunctionPlotter */
/* global FunctionPlotterInput */
FunctionPlotter.prototype.highlightStaticValue = function(value) {
  const plotter = this;

  let staticData;
  staticData = {
    "input":value,
    "output":plotter.functions[0].functionToPlot(value)
  };

  plotter.highlight = new FunctionPlotterInput({
    "parent":plotter.functions[0],
    "data":staticData,
    "isDiscrete":true,
    "isStatic":true
  });

  return plotter;
};
