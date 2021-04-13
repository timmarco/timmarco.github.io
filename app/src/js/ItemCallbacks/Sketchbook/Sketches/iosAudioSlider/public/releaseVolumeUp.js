IosAudioSlider.prototype.releaseVolumeUp = function(atTime) {
  const slider = this;

  slider.volumeUpButton
    .transition()
    .duration(250)
    .delay(atTime)
    .attr("fill","black")
    .attr("x",27);


  return slider;
}
