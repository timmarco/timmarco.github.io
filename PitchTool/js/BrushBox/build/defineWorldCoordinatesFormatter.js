/* jshint esversion:6 */
BrushBox.prototype.defineWorldCoordinatesFormatter = function() {
  const box = this;

  let formatter = (coordinates) => {
    let outputCoordinates = {};
    outputCoordinates.x = coordinates.x - (box.worldCoordinates.width / 2);
    outputCoordinates.y = box.worldCoordinates.height - coordinates.y;
    return outputCoordinates;
  }

  return formatter;
}
