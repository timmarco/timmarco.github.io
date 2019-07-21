/* jshint esversion:6 */
LineChart.prototype.addContractLine = function() {
  const chart = this;

  let line = chart.layers.contract
    .append("path")
    .attr("fill","none")
    .attr("stroke",chart.styles.contractLineStroke)
    .attr("stroke-width",chart.styles.contractLineStrokeWidth)
    .attr("stroke-dasharray",chart.styles.contractLineStrokeDashArray);

  return line;
}
