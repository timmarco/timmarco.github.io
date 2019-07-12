/* jshint esversion:6 */
Numberline.prototype.defaultSize = function(options) {
  const chart = this;

  let size = {};
  options.size = chart.defaulter(options.size,{});
  size.height = chart.defaulter(options.height,30);
  size.width = chart.defaulter(options.width,500);
  return size;
};
