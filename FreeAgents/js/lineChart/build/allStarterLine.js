/* jshint esversion:6 */
LineChart.prototype.addStarterLine = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("line")
    .attr("stroke",chart.styles.starterLineStroke)
    .attr("stroke-width",chart.styles.starterLineStrokeWidth);

  return line;
};
