/* jshint esversion:6 */
WinChart.prototype.addLine = function() {
  const chart = this;

  let line = chart.layers.line
    .append("path")
    .attr("fill","none")
    .attr("stroke",chart.styles.lineStroke)
    .attr("stroke-width",chart.styles.lineStrokeWidth);

  return line;
}
