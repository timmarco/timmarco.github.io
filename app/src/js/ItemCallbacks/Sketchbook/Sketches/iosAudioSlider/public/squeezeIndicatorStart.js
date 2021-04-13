IosAudioSlider.prototype.squeezeIndicatorStart = function(startTime) {
  const slider = this;

  slider.horizontalScale
    .transition()
    .duration(500)
    .delay(startTime)
    .ease(d3.easeQuadIn)
    .attr("transform","scale(0.2,1)");

  return slider;
}
