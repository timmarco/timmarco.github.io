/* global CartesianPlot */
/* global d3 */
CartesianPlot.prototype.defineYScale = function() {
  const plot = this;

  plot.yScale = d3
    .scaleLinear()
    .domain(plot.domain)
    .range([plot.height - plot.marginBottom,plot.marginTop]);

  return plot;
};
