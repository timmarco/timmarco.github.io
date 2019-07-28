/* jshint esversion:6 */
BrushBox.prototype.addLayers = function() {
  const box = this;

  let layers = {};
  layers.rect = addLayer();
  layers.hints = addLayer();
  layers.corners = addLayer();

  return layers;

  function addLayer() {
    return box.group
      .append("g");
  }
};
