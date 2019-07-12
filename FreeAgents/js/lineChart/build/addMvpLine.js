/* jshint esversion:6 */
LineChart.prototype.addMVPLine = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("line")
    .attr("stroke",chart.styles.mvpLineStroke)
    .attr("stroke-width",chart.styles.mvpLineStrokeWidth);

  return line;
};
