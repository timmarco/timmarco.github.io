IosAudioSlider.prototype.addValue = function() {
  const slider = this;
  return slider.horizontalScale
    .append("rect")
    .attr("width",65)
    .attr("height",210)
    .attr("rx",20)
    .attr("ry",25)
    .attr("y",-210/2)
    .attr("x",-32.5)
    .attr("fill",slider.valueColor);

}
