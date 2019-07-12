/* jshint esversion:6 */
Slider.prototype.hide = function() {
  const slider = this;

  slider.group
    .attr("display","none");

  return slider;
};
