/* jshint esversion:6 */
ModelSlider.prototype.addLayers = function() {
  const slider = this;

  let layers = {};
  layers.track = slider.addSingleLayer();
  layers.activeTrack = slider.addSingleLayer();
  layers.circle = slider.addSingleLayer();
  layers.heading = slider.addSingleLayer();

  return layers;
}
