/* jshint esversion:6 */
Modeler.prototype.addChart = function(options) {
  const modeler = this;
  let chart;

  chart = new LineChart({
    "where":modeler.layers.chart,
    "size":modeler.referencePoints.chartSize,
    "margins":modeler.referencePoints.chartMargins,
    "origin":modeler.referencePoints.chartOrigin,
  });

  return chart;
};
