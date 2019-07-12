/* jshint esversion:6 */
Slider.prototype.defineLayout = function() {
  const slider = this;
  let layout = {};

  layout.labelOrigin = {"x":0,"y":slider.margins.top};
  layout.sliderOrigin = {"x":slider.margins.left,"y":slider.margins.top};

  return layout;
};
