IosAudioSlider.prototype.addBackground = function() {
  const slider = this;
  return slider.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill",d3.schemeCategory10[6]);
}
