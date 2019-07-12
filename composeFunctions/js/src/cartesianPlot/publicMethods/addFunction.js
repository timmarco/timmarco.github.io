/* global CartesianPlot */
/* global CartesianFunction */

CartesianPlot.prototype.addFunction = function(options) {
  const plot = this;

  let plottedFunction;

  options.plot = plot;
  plottedFunction = new CartesianFunction(options);
  plot.plottedFunctions.push(plottedFunction);

  return plot;
};
