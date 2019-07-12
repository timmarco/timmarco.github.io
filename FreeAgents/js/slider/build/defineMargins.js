/* jshint esversion:6 */
Slider.prototype.defineMargins = function(presetMargins) {
  const slider = this;
  let margins = slider.defaulter(presetMargins,{});

  margins.left = slider.defaulter(margins.left,10);
  margins.right = slider.defaulter(margins.right,50);
  margins.top = slider.defaulter(margins.top,10);
  margins.bottom = slider.defaulter(margins.bottom,0);

  return margins;
};
