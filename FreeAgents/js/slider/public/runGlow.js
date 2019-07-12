/* jshint esversion:6 */
Slider.prototype.runGlow = function() {
  const slider = this;

  slider.isGlowing = true;

  slider.glowCircle
    .attr("display","block");

  glow();

  return slider;

  function glow() {
    slider.glowCircle
      .attr("opacity",slider.styles.glowCircleDefaultOpacity)
      .attr("r",slider.styles.glowCircleDefaultRadius)
      .attr("fill",slider.styles.glowCircleFill)
      .transition()
      .delay(slider.styles.glowDelay)
      .duration(slider.styles.glowDuration)
      .attr("opacity",slider.styles.glowCircleEndOpacity)
      .attr("r",slider.styles.glowCircleEndRadius)
      .attr("fill",slider.styles.glowCircleEndFill)
      .on('end',function()  {
        if(slider.isGlowing) {
          glow();
        }
      });

  }
};
