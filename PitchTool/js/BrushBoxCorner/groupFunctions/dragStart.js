/* jshint esversion:6 */
BrushBoxCorner.prototype.dragStart = function() {
  const corner = this;
  return function() {
    corner.dragLock = true;
    corner.parent.dragLock = true;

    corner.parent.callbacks
      .dragStart();
  }
}
