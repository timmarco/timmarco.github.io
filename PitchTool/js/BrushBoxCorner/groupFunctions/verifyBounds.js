/* jshint esversion:6 */
BrushBoxCorner.prototype.verifyBounds = function() {
  const corner = this;

  corner.bounds = corner.callbacks
    .checkBounds();

  let attemptedCoordinates = {};
  attemptedCoordinates.x = d3.event.x > corner.bounds.max.x ? corner.bounds.max.x : d3.event.x;
  attemptedCoordinates.x = attemptedCoordinates.x < corner.bounds.min.x ? corner.bounds.min.x : attemptedCoordinates.x;

  attemptedCoordinates.y = d3.event.y > corner.bounds.max.y ? corner.bounds.max.y : d3.event.y;
  attemptedCoordinates.y = attemptedCoordinates.y < corner.bounds.min.y ? corner.bounds.min.y : attemptedCoordinates.y;

  corner.coordinates.x = attemptedCoordinates.x;
  corner.coordinates.y = attemptedCoordinates.y;

  return corner;
}
