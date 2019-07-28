/* jshint esversion:6 */
BrushBoxCorner.prototype.defineDrag = function() {
  const corner = this;

  let drag = d3.drag()
    .on('start',corner.dragStart())
    .on('drag',corner.dragging())
    .on('end',corner.dragEnd());

  return drag;
}
