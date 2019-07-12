/* jshint esversion:6 */
LineChart.prototype.addZeroLine = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("line")
    .attr("stroke",chart.styles.zeroLineStroke)
    .attr("stroke-width",chart.styles.zeroLineStrokeWidth);

  return line;
};
