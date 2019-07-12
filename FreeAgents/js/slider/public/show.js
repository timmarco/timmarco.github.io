/* jshint esversion:6 */
Slider.prototype.show = function() {
  const slider = this;

  slider.group
    .attr("display","block");

  return slider;
};
