/* global FunctionPlotterInput */
FunctionPlotterInput.prototype.defaulter = function(key,defaultValue) {
  const plotter = this;

  plotter[key] = plotter.options[key] !== undefined ? plotter.options[key] : defaultValue;

  return plotter;
};
