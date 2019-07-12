/* jshint esversion:6 */
LineChart.prototype.addAllStarLine = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("line")
    .attr("stroke",chart.styles.allStarLineStroke)
    .attr("stroke-width",chart.styles.allStarLineStrokeWidth);

  return line;
};
