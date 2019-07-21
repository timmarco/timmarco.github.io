/* jshint esversion:6 */
ModelSlider.prototype.addHighlightCircle = function() {
  const slider = this;

  let circle = slider.circleGroup
    .append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .attr("r",slider.styles.circleRadius)
    .attr("fill",slider.styles.highlightCircleFill)
    .attr("opacity",slider.styles.highlightCircleOpacity);

  return circle;
}
