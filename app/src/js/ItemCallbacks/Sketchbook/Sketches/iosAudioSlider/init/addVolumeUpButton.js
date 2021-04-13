IosAudioSlider.prototype.addVolumeUpButton = function() {
  const slider = this;
  return slider.sketch.svg
    .append("rect")
    .attr("x",27)
    .attr("y",100)
    .attr("width",30)
    .attr("height",100)
    .attr("rx",10)
    .attr("ry",10)
    .attr("fill","black");

}
