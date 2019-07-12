/* jshint esversion:6 */
LineChart.prototype.updateProjectionLines = function(projectionValues) {
  const chart = this;

  chart.projectionLine
    .datum(projectionValues.mean.yearData)
    .attr("d",chart.lineGenerator);

  return chart;
};
