/* jshint esversion:6 */
BrushBox.prototype.rectDragStart = function() {
  const box = this;
  return function() {
    box.cursorOffset = {};
    box.cursorOffset.x = d3.event.x - box.coordinates.x;
    box.cursorOffset.y = d3.event.y - box.coordinates.y;

    box.callbacks
      .dragStart();

  }
}
