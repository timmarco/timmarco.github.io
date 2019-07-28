/* jshint esversion:6 */
BrushBox.prototype.addCorners = function() {
  const box = this;
  let corners = {};

  corners.topLeft = box
    .addTopLeftCorner();

  corners.topRight = box
    .addTopRightCorner();

  corners.bottomLeft = box
    .addBottomLeftCorner();

  corners.bottomRight = box
    .addBottomRightCorner();


  return corners;
}
