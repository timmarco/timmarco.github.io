/* jshint esversion:6 */
Minibar.prototype.addLayers = function() {
  const bar = this;
  
  let layers = {};
  layers.labels = singleLayer();
  layers.track = singleLayer();
  layers.active = singleLayer();
  layers.line = singleLayer();
  layers.valueLabel = singleLayer();
  layers.title = singleLayer();

  return layers;

  function singleLayer() {
    return bar.svg.append("g");
  }
};
