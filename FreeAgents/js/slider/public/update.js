/* jshint esversion:6 */
Slider.prototype.update = function(newValue) {
  const slider = this;

  slider.currentValue = newValue;
  slider.circle
    .attr("cx",slider.scale(newValue));

  return slider;
}
