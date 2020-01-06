WorkExample.prototype.addLayers = function() {
  const example = this;
  const layers = {};
  
  layers.image = example.svg.append("g");
  layers.text = example.svg.append("g");
  layers.body = example.svg.append("g");
  layers.hotspot = example.svg.append("g");

  return layers;
}
