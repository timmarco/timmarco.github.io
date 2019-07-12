/* jshint esversion:6 */
LineChart.prototype.addProjectionLine = function() {
  const chart = this;

  let line;

  line = chart.layers.projection
    .append("path")
    .datum([])
    .attr("stroke",chart.styles.projectionLine)
    .attr("stroke-width",chart.styles.projectionLineStroke)
    .attr("fill","none")
    .attr("display","none")
    .attr("d",chart.lineGenerator);


  return line;
};
