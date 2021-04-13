BlurAttentionSketch.prototype.addFilter = function() {
  const blur = this;
  return blur.defs
    .append("filter")
    .attr("id","blur");
}
