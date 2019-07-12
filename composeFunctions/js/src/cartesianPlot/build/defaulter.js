/* global CartesianPlot */
CartesianPlot.prototype.defaulter = function(key,defaultValue) {
  const plotter = this;

  plotter[key] = plotter.options[key] ? plotter.options[key] : defaultValue;

  return plotter;
};
