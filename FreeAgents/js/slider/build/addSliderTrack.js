/* jshint esversion:6 */
Slider.prototype.addSliderTrack = function() {
  const slider = this;
  let track;

  track = slider.layers.track
    .append("rect")
    .attr("x",slider.margins.left)
    .attr("y",slider.referencePoints.sliderTrackVerticalCenter)
    .attr("height",slider.styles.sliderTrackHeight)
    .attr("width",slider.referencePoints.effectiveWidth)
    .attr("fill",slider.styles.sliderTrackColor);

  return track;
};
