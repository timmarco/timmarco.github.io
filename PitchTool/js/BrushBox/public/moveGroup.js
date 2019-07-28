/* jshint esversion:6 */
BrushBox.prototype.moveGroup = function() {
  const box = this;

  box.group
    .attr("transform","translate("+box.coordinates.x+","+box.coordinates.y+")");

  return box;
}
