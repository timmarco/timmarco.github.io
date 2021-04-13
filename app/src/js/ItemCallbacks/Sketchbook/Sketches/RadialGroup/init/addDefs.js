RadialGroup.prototype.addDefs = function() {
  const radial = this;
  return radial.sketch.svg
    .append("defs");
}
