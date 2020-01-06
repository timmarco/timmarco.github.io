SvgTutorialContainer.prototype.addLayers = function() {
  const container = this;

  const layers = {};
  layers.codeBlock = addLayer(container.svg);
  layers.svgElement = addLayer(container.svg);

  return layers;

  function addLayer(where) {
    return where.append("g");
  }
}
