SkillBoxCard.prototype.addLayers = function() {
  const card = this;

  const layers = {};
  layers.background = addSingleLayer();
  layers.headlineOffset = addSingleLayer();
  layers.headline = layers.headlineOffset.append("g");
  layers.bodyOffset = addSingleLayer();
  layers.body = layers.bodyOffset.append("g");

  return layers;

  function addSingleLayer() {
    return card.group
      .append("g")
      .attr("transform","translate(0,0)");
  }
}
