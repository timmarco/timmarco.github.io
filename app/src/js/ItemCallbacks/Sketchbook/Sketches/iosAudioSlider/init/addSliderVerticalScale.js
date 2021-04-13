IosAudioSlider.prototype.addSliderVerticalScale = function() {
  const slider = this;
  return slider.sliderScale
    .append("g")
    .attr("transform","scale(1,1)");

}
