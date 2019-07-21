/* jshint esversion:6 */
LineChart.prototype.addZeroLine = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("line")
    .attr("stroke",chart.styles.zeroLineStroke)
    .attr("stroke-width",chart.styles.zeroLineStrokeWidth)
    .attr("stroke-dasharray","3,3")
    .attr("x1",chart.scales.x(0))
    .attr("x2",chart.scales.x(chart.scales.x.domain()[1]))
    .attr("y1",chart.scales.y(0))
    .attr("y2",chart.scales.y(0));


  return line;
};
