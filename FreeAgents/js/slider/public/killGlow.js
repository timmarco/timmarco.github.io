/* jshint esversion:6 */
Slider.prototype.killGlow = function() {
  const slider = this;

  slider.isGlowing = false;
  
  slider.glowCircle
    .attr("display","none");

  return slider;
}
