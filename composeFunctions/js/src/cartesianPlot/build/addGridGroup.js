/* global CartesianPlot */
CartesianPlot.prototype.addGridGroup = function() {
  const plot = this;

  plot.gridGroup = plot.svg
    .append("g")
    .attr("id","grid");

  return plot;
};
