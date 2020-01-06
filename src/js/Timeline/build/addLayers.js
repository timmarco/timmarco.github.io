Timeline.prototype.addLayers = function() {
  const timeline = this;
  const layers = {};
  layers.axis = timeline.svg.append("g");
  layers.companies = timeline.svg.append("g");
  return layers;
}
