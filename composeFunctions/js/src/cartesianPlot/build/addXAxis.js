/* global CartesianPlot */
/* global d3 */
CartesianPlot.prototype.addXAxis = function() {
  const plot = this;

  plot.xAxis = d3
    .axisBottom(plot.xScale)
    .ticks(plot.xAxisTicks);

  plot.xAxisGroup = plot.axisGroup
    .append("g")
    .attr("transform","translate(0,"+(plot.height / 2)+")")
    .call(plot.xAxis);

  return plot;
};
