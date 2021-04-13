IosAudioSlider.prototype.lowerVolume = function(startTime) {
  const slider = this;

  slider.value
    .transition()
    .duration(2000)
    .attr("height",0)
    .attr("y",105);

  return slider;
}
