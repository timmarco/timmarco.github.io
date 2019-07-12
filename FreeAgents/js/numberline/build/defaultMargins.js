/* jshint esversion:6 */
Numberline.prototype.defaultMargins = function(options) {
  const chart = this;
  let margins = {};
  options.margins = chart.defaulter(options.margins,{});
  margins.left = chart.defaulter(options.margins.left,10);
  margins.right = chart.defaulter(options.margins.right,10);
  margins.top = chart.defaulter(options.margins.top,5);
  margins.bottom = chart.defaulter(options.margins.bottom,10);
  return margins;  
};
