/* jshint esversion:6 */
Modeler.prototype.defineSize = function(preset) {
  const modeler = this;
  let size;
  size = modeler.defaulter(preset,{});
  size.width = modeler.defaulter(size.width,800);
  size.height = modeler.defaulter(size.height,600);
  return size;
};
