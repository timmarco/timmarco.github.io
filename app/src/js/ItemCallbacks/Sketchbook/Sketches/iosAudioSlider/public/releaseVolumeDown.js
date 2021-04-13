IosAudioSlider.prototype.releaseVolumeDown = function(atTime) {
  const slider = this;

  slider.volumeDownButton
    .transition()
    .duration(250)
    .delay(atTime)
    .attr("fill","black")
    .attr("x",27);

  return slider;
}
