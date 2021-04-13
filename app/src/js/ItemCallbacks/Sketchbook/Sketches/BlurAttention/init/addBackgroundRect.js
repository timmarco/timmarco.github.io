BlurAttentionSketch.prototype.addBackgroundRect = function() {
  const blur = this;
  return blur.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill","#ccc");
}
