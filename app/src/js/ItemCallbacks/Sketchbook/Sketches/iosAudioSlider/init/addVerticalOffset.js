IosAudioSlider.prototype.addVerticalOffset = function() {
  const slider = this;
  return slider.sliderGroup
    .append("g")
    .attr("transform","translate(0,200)");
}
