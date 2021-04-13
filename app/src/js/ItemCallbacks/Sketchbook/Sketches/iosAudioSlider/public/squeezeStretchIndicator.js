IosAudioSlider.prototype.squeezeStretchIndicator = function(atTime) {
  const slider = this;

  slider.horizontalScale
    .transition()
    .delay(atTime)
    .duration(350)
    .ease(d3.easeQuadIn)
    .attr("transform","scale(0.1,1)");

  slider.verticalScale
    .transition()
    .delay(atTime)
    .duration(350)
    .ease(d3.easeQuadIn)
    .attr("transform","scale(1,1.15)");

  return slider;
}
