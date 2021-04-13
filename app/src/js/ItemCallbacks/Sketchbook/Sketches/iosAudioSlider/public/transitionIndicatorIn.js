IosAudioSlider.prototype.transitionIndicatorIn = function(atTime) {
  const slider = this;

  slider.sliderGroup
    .attr("transform","translate(-10,0)")
    .transition()
    .delay(atTime)
    .duration(375)
    .ease(d3.easeQuadIn)
    .attr("transform","translate(100,0)");

  slider.sliderScale
    .attr("transform","scale(0.8)")
    .transition()
    .delay(atTime)
    .duration(375)
    .ease(d3.easeQuadIn)
    .attr("transform","scale(1)");

  slider.verticalScale
    .attr("transform","scale(1,0.25)")
    .transition()
    .delay(atTime)
    .ease(d3.easeQuadOut)
    .duration(375)
    .attr("transform","scale(1,1)");

  slider.horizontalScale
    .attr("transform","scale(1,1)");

  return slider;
}
