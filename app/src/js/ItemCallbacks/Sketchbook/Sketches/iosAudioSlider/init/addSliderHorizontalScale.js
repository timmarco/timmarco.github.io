IosAudioSlider.prototype.addSliderHorizontalScale = function() {
  const slider = this;
  return slider.verticalScale
    .append("g")
    .attr("transform","scale(1,1)");

}
