/* jshint esversion:6 */
Modeler.prototype.defineChartMargins = function(preset) {
  const modeler = this;
  let margins;
  margins = modeler.defaulter(preset,{});
  margins.left = modeler.defaulter(margins.left,75);
  margins.right = modeler.defaulter(margins.right,10);
  margins.top = modeler.defaulter(margins.top,50);
  margins.bottom = modeler.defaulter(margins.bottom,50);
  return margins;
};
