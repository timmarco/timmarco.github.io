SkillBox.prototype.applyLayout = function() {
  const box = this;

  const layerHeight = box.layers.nav.node().getBBox().height;
  const verticalOffset = (box.layout.size.height / 2) - (layerHeight / 2);

  box.layers.nav
    .attr("transform","translate(0,"+verticalOffset+")");

  return box;
}
