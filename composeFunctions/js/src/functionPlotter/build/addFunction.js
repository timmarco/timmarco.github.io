/* global FunctionPlotter */
/* global FunctionStep */
FunctionPlotter.prototype.addFunction = function(functionToPlot) {
  const plotter = this;
  let step;

  step = new FunctionStep({
    "parent":plotter,
    "functionToPlot":functionToPlot,
    "y":plotter.margins.top + (plotter.functions.length * 50),
    "height":plotter.lineHeight,
    "sampleCount":plotter.samples,
    "isDiscrete":plotter.isDiscrete
  });

  plotter.functions
    .push(step);

  plotter.outputLabel
    .attr("y",plotter.margins.top + plotter.lineHeight * plotter.functions.length);


  return plotter;
};
