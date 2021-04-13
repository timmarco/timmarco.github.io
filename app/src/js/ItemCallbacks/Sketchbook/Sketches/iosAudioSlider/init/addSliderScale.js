IosAudioSlider.prototype.addSliderScale = function() {
  const slider = this;
  return slider.verticalOffset
    .append("g")
    .attr("transform","scale(1)");
}
