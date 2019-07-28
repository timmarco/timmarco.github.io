/* jshint esversion:6 */
BrushBoxCorner.prototype.dragEnd = function() {
  const corner = this;
  return function() {
    corner.parent.dragLock = false;
    corner.dragLock = false;
    corner.groupMouseout();

    corner.parent.callbacks
      .valueChanged({
        "size":corner.parent.size,
        "coordinates":corner.parent.coordinates
      });

    corner.parent.callbacks
      .dragEnd();

  }
}
