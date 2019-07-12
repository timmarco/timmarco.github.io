/* jshint esversion:6 */
Modeler.prototype.addLayers = function() {
  const modeler = this;
  let layers = {};
  layers.chart = modeler.addSingleLayer();
  layers.contract = modeler.addSingleLayer();
  layers.button = modeler.addSingleLayer();
  layers.pane = modeler.addSingleLayer();
  return layers;
};
