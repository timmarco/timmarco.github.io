/* jshint esversion:6 */
PitchSmallPlot.prototype.addLayers = function() {
  const plot = this;

  let layers = {};
  layers.catcherView = addLayer();
  layers.sideView = addLayer();


  return layers;

  function addLayer() {
    return plot.svg
      .append("g");
  }
};
