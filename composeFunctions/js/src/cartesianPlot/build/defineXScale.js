/* global CartesianPlot */
/* global d3 */
CartesianPlot.prototype.defineXScale = function() {
  const plot = this;

  plot.xScale = d3
    .scaleLinear()
    .domain(plot.range)
    .range([plot.marginLeft,plot.width - plot.marginRight]);

  return plot;
};
