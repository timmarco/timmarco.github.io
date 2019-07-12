/* jshint esversion:6 */
Slider.prototype.setDragCallback = function(cb) {
  const slider = this;

  slider.dragCallback = cb;

  return slider;
};
