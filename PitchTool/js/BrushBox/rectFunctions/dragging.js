/* jshint esversion:6 */
BrushBox.prototype.rectDragging = function() {
  const box = this;
  return function() {

    box.coordinates.x = d3.event.x - box.cursorOffset.x;
    box.coordinates.y = d3.event.y - box.cursorOffset.y;

    box
      .resized();
  }
}
