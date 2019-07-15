/* jshint esversion:6 */
LineChart.prototype.addProjectionArea = function() {
  const chart = this;

  let area = chart.layers.projectionArea
    .append("path")
    .attr("stroke","none")
    .attr("fill",chart.styles.projectionAreaFill);

  return area;

};
