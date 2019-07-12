/* jshint esversion:6 */
Slider.prototype.addLayers = function() {
  const slider = this;
  let layers = {};

  layers.background = addSingleLayer();
  layers.text = addSingleLayer();
  layers.track = addSingleLayer();
  layers.glow = addSingleLayer();
  layers.circle = addSingleLayer();

  return layers;

  function addSingleLayer() {
    let layer;

    layer = slider.group
      .append("g");

    return layer;
  }
};
