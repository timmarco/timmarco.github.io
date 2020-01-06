MobileWorkExample.prototype.addLayers = function() {
  const example = this;

  const layers = {};
  layers.background = example.svg.append("g");
  layers.image = example.svg.append("g");
  layers.headline = example.svg.append("g");
  layers.tap = example.svg.append("g");
  layers.body = example.svg.append("g");

  return layers;
}
