/* global FunctionPlotter */
/* global d3 */
FunctionPlotter.prototype.defineXScale = function() {
  const plotter = this;

  plotter.xScale = d3.scaleLinear()
    .domain(plotter.domain)
    .range(plotter.range);

  return plotter;
};
