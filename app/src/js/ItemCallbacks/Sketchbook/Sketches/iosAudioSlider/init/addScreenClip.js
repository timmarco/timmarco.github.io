IosAudioSlider.prototype.addScreenClip = function() {
  const slider = this;

  return slider.sketch.svg
    .append("rect")
    .attr("x",0)
    .attr("width",50)
    .attr("height",500)
    .attr("fill","white");
}
