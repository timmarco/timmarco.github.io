/* global CartesianPlot */
CartesianPlot.prototype.addAxisGroup = function() {
  const plot = this;

  plot.axisGroup = plot.svg
    .append("g")
    .attr("id","axis");

  return plot;
};
