/* jshint esversion:6 */
LineChart.prototype.addLayers = function() {
  const chart = this;

  let layers = {};

  layers.axes = chart.addSingleLayer();
  layers.title = chart.addSingleLayer();
  layers.projectionArea = chart.addSingleLayer();
  layers.backgroundLine = chart.addSingleLayer();
  layers.projection = chart.addSingleLayer();
  layers.foregroundLine = chart.addSingleLayer();
  layers.backgroundLabels = chart.addSingleLayer();
  layers.frontText = chart.addSingleLayer();
  layers.contract = chart.addSingleLayer();

  return layers;

};
