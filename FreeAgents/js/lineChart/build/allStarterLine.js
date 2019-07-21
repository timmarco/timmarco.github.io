/* jshint esversion:6 */
LineChart.prototype.addStarterLine = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("line")
    .attr("stroke",chart.styles.starterLineStroke)
    .attr("stroke-width",chart.styles.starterLineStrokeWidth)
    .attr("stroke-dasharray","3,3")
    .attr("x1",chart.scales.x(0))
    .attr("x2",chart.scales.x(chart.scales.x.domain()[1]))
    .attr("y1",chart.scales.y(2))
    .attr("y2",chart.scales.y(2));


  return line;
};
