/* jshint esversion:6 */
Modeler.prototype.addChart = function(options) {
  const modeler = this;
  let chart;

  modeler.layers.chart
    .attr("transform","translate("+modeler.layout.chartOrigin.x+","+modeler.layout.chartOrigin.y+")");

  chart = new LineChart({
    "where":modeler.layers.chart,
    "size":modeler.layout.chartSize,
    "margins":modeler.chartMargins,
    "origin":modeler.layout.chartOrigin
  });

  return chart;
};
