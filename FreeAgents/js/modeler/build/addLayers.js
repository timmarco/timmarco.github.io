/* jshint esversion:6 */
Modeler.prototype.addLayers = function() {
  const modeler = this;
  let layers = {};

  layers.base = modeler.addSingleLayer();
  layers.contract = modeler.addSingleLayer();
  layers.button = modeler.addSingleLayer();
  layers.rightPane = modeler.addSingleLayer();
  layers.chart = modeler.addSingleLayer();
  layers.pane = modeler.addSingleLayer();

  layers.chart
    .attr("transform","translate("+modeler.referencePoints.chartOrigin.x+","+modeler.referencePoints.chartOrigin.y+")");

  return layers;
};
