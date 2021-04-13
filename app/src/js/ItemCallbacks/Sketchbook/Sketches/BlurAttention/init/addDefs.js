BlurAttentionSketch.prototype.addDefs = function() {
  const blur = this;
  return blur.sketch.svg
    .append("defs");
}
