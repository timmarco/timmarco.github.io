/* global FunctionPlotter */
FunctionPlotter.prototype.defaulter = function(key,defaultValue) {
  const plotter = this;

  plotter[key] = plotter.options[key] !== undefined ? plotter.options[key] : defaultValue;

  return plotter;
};
