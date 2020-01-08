ModelThumbnail.prototype.addLayers = function() {
  const thumbnail = this;

  const layers = {};
  layers.background = addSingleLayer(thumbnail.svg);

  layers.headlineScale = addSingleLayer(thumbnail.svg)
    .attr("transform","scale(1)");
  layers.headlineOffset = addSingleLayer(layers.headlineScale);
  layers.headline = addSingleLayer(layers.headlineOffset);


  return layers;

  function addSingleLayer(where) {
    return where
      .append("g")
      .attr("transform","translate(0,0)");
  }
}
