IosAudioSlider.prototype.raiseVolumeUp = function(atTime) {
  const slider = this;

  slider.value
    .transition()
    .delay(atTime)
    .duration(2000)
    .attr("height",210)
    .attr("y",-105);


  return slider;
}
