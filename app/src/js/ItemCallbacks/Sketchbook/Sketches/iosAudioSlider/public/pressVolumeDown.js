IosAudioSlider.prototype.pressVolumeDown = function(atTime) {
  const slider = this;

  slider.volumeDownButton
    .transition()
    .duration(250)
    .delay(atTime)
    .attr("fill",slider.buttonPressColor)
    .attr("x",32);

  return slider;
}
