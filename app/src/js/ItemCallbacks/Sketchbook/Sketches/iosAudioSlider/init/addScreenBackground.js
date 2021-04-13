IosAudioSlider.prototype.addScreenBackground = function() {
  const slider = this;
  return slider.sketch.svg
    .append("rect")
    .attr("x",50)
    .attr("width",500)
    .attr("height",500)
    .attr("fill","#ccc")
}
