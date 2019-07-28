/* jshint esversion:6 */
BrushBox.prototype.defineDrag = function() {
  const box = this;
  let drag = d3.drag();

  drag.on('start',box.rectDragStart());
  drag.on('drag',box.rectDragging());
  drag.on('end',box.rectDragEnd());

  return drag;
}
