IosAudioSlider.prototype.transitionIndicatorOut = function(atTime) {
  const slider = this;

  slider.sliderGroup
    .transition()
    .delay(atTime)
    .duration(375)
    .ease(d3.easeQuadOut)
    .attr("transform","translate(-10,0)")

  slider.sliderScale
    .transition()
    .delay(atTime)
    .duration(375)
    .ease(d3.easeQuadOut)
    .attr("transform","scale(0.8)")

  slider.verticalScale
    .transition()
    .delay(atTime)
    .ease(d3.easeQuadOut)
    .duration(375)
    .attr("transform","scale(1,0.25)")
    .on("end",() => {
      slider.isRunning = false;
    })

  return slider;
}
