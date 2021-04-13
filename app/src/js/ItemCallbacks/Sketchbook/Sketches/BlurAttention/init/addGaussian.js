BlurAttentionSketch.prototype.addGaussian = function() {
  const blur = this;
  return blur.filter
    .append("feGaussianBlur")
    .attr("in","sourceGraphic")
    .attr("stdDeviation",0);
}
