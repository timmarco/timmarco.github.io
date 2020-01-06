SkillBox.prototype.addLayers = function() {
  const box = this;
  const layers = {};

  layers.base = addSingleLayer();
  layers.skillGroups = addSingleLayer();
  layers.nav = addSingleLayer();
  layers.cards = addSingleLayer();

  return layers;

  function addSingleLayer() {
    return box.svg
      .append("g")
      .attr("transform","translate(0,0)");
  }
}
