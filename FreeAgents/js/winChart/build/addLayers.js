/* jshint esversion:6 */
WinChart.prototype.addLayers = function() {
  const chart = this;

  let layers = {};

  layers.axes = chart.addSingleGroup();
  layers.line = chart.addSingleGroup();
  layers.circles = chart.addSingleGroup();

  return layers;
}
