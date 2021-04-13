IosAudioSlider.prototype.unsqueezeUnstretchIndicator = function(atTime) {
  const slider = this;

  slider.horizontalScale
    .transition()
    .delay(atTime)
    .duration(350)
    .ease(d3.easeQuadOut)
    .attr("transform","scale(0.2,1)");

  slider.verticalScale
    .transition()
    .delay(atTime)
    .duration(350)
    .ease(d3.easeQuadOut)
    .attr("transform","scale(1,1)");


  return slider;
}
