BlurAttentionSketch.prototype.addButtonGroup = function() {
  const blur = this;
  return blur.sketch.svg
    .append("g")
    .attr("transform","translate(115,90)");
}
