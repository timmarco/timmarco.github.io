/* jshint esversion:6 */
Slider.prototype.defineSize = function(presetSize) {
  const slider = this;
  let size = slider.defaulter(presetSize,{});

  size.height = slider.defaulter(size.height,50);
  size.width = slider.defaulter(size.width,200);

  return size;
};
