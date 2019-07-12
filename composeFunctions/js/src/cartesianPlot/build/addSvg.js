/* global CartesianPlot */
/* global d3 */
CartesianPlot.prototype.addSvg = function() {
  const plot = this;

  plot.svg = d3.select(plot.where)
    .append("svg")
    .attr("width",plot.width)
    .attr("height",plot.height);

  return plot;
};
