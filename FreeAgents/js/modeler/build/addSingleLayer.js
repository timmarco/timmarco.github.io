/* jshint esversion:6 */
Modeler.prototype.addSingleLayer = function() {
  const modeler = this;
  let layer;
  layer = modeler.svg
    .append("g");
  return layer;
};
