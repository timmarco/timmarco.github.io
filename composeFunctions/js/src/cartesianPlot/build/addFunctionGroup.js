/* global CartesianPlot */
CartesianPlot.prototype.addFunctionGroup = function() {
  const plot = this;

  plot.functionGroup = plot.svg
    .append("g")
    .attr("id","functions");

  return plot;
};
