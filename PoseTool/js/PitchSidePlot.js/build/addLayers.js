/* jshint esversion:6 */
PitchSidePlot.prototype.addLayers = function() {
  const plot = this;
  let layers = {};
  layers.batter = addLayer();
  layers.lines = addLayer();
  layers.circles = addLayer();
  return layers;

  function addLayer() {
    return plot.svg.append("g");
  }
};
