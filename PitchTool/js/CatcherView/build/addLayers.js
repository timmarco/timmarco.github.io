/* jshint esversion:6 */
CatcherView.prototype.addLayers = function() {
  const view = this;
  let layers = {};


  layers.base = addSingleLayer();
  layers.axis = addSingleLayer();
  layers.pitchCircles = addSingleLayer();
  layers.activeCircles = addSingleLayer();
  layers.highlightCircles = addSingleLayer();
  layers.zone = addSingleLayer();
  layers.brush = addSingleLayer();

  return layers;

  function addSingleLayer() {
    let layer = view.group
      .append("g")
      .attr("opacity",1);

    return layer;
  }
};
