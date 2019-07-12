/* global CartesianPlot */
/* global d3 */
CartesianPlot.prototype.addYAxis = function() {
  const plot = this;

  plot.yAxis = d3
    .axisLeft(plot.yScale)
    .ticks(plot.yAxisTicks);

  plot.yAxisGroup = plot.axisGroup
    .append("g")
    .attr("transform","translate("+(plot.width / 2)+",0)")
    .call(plot.yAxis);

  return plot;
};
