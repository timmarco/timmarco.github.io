/* jshint esversion:6 */
BrushBoxCorner.prototype.move = function(coordinates) {
  const corner = this;

  corner.coordinates = coordinates;

  corner.group
    .attr("transform","translate("+coordinates.x+","+coordinates.y+")");

  return corner;
}
