/* jshint esversion:6 */
Numberline.prototype.addLayers = function(where) {
  const chart = this;

  let layers = {};

  layers.base = chart.singleLayer(where);
  layers.labels = chart.singleLayer(where);
  layers.summaryIndicators = chart.singleLayer(where);
  layers.axis = chart.singleLayer(where);
  layers.baseData = chart.singleLayer(where);
  layers.highlightData = chart.singleLayer(where);
  layers.activeLayer = chart.singleLayer(where);

  return layers;
};
