/* jshint esversion:6 */
ModelSlider.prototype.updateValue = function(newValue) {
  const slider = this;

  slider.currentValue = newValue;
  
  slider.circleGroup
    .attr("transform","translate("+slider.scale(newValue)+",0)");

  slider.activeTrack
    .attr("width",slider.scale(newValue) - slider.scale(slider.domain[0]))

  slider.labelText
    .text(slider.formatter(newValue));

  slider.labelGhost
    .text(slider.formatter(newValue));

  return slider;
}
