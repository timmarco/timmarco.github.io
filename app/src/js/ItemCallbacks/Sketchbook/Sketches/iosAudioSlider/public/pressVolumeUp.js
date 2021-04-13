IosAudioSlider.prototype.pressVolumeUp = function(atTime) {
  const slider = this;

  slider.volumeUpButton
    .transition()
    .duration(250)
    .delay(atTime)
    .attr("fill",slider.buttonPressColor)
    .attr("x",32);

  return slider;
}
