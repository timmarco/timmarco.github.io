/* jshint esversion:6 */
Slider.prototype.addGlowCircle = function() {
  const slider = this;

  // TODO: FILL IN VALUES
  // UPDATE STYLES
  let glowCircle = slider.layers.glow
    .append("circle")
    .attr("cx",slider.scale(slider.currentValue))
    .attr("cy",slider.referencePoints.circleCenterY)
    .attr("opacity",slider.styles.glowCircleDefaultOpacity)
    .attr("r",slider.styles.glowCircleDefaultRadius)
    .attr("fill",slider.styles.glowCircleFill)
    .attr("display","none");

  return glowCircle;
};
