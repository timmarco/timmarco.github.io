/* jshint esversion:6 */
BrushBox.prototype.moveEdgeIndicators = function() {
  const box = this;

  box.edgeIndicators.left
    .attr("y2",box.size.height);

  box.edgeIndicators.top
    .attr("x2",box.size.width);

  box.edgeIndicators.right
    .attr("x1",box.size.width)
    .attr("x2",box.size.width)
    .attr("y2",box.size.height);

  box.edgeIndicators.bottom
    .attr("y1",box.size.height)
    .attr("y2",box.size.height)
    .attr("x2",box.size.width);


  return box;
}
