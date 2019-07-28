/* jshint esversion:6 */
BrushBoxCorner.prototype.dragging = function() {
  const corner = this;
  return function() {
    corner
      .verifyBounds();

    corner.group
      .attr("transform","translate("+corner.coordinates.x+","+corner.coordinates.y+")");

    corner.callbacks
      .moved(corner.coordinates);

  }
}
