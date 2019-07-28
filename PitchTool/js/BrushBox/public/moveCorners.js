/* jshint esversion:6 */
BrushBox.prototype.moveCorners = function() {
  const box = this;

  box.corners.topLeft
    .move({"x":0,"y":0});

  box.corners.topRight
    .move({"x":box.size.width,"y":0});

  box.corners.bottomLeft
    .move({"x":0,"y":box.size.height});

  box.corners.bottomRight
    .move({"x":box.size.width,"y":box.size.height});


  return box;
}
