/* jshint esversion:6 */
ModelSlider.prototype.addCircle = function() {
  const slider = this;

  let circle = slider.circleGroup
    .append("circle")
    .attr("r",slider.styles.circleRadius)
    .attr("cx",0)
    .attr("cy",0)
    .attr("fill",slider.styles.circleFill)
    .attr("stroke",slider.styles.circleStroke)
    .attr("stroke-width",slider.styles.circleStrokeWidth);

  return circle;
}
