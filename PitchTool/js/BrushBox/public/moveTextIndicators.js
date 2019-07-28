/* jshint esversion:6 */
BrushBox.prototype.moveTextIndicators = function() {
  const box = this;

  box.sizeIndicators.left
    .attr("y",box.size.height / 2);

  box.sizeIndicators.right
    .attr("x",box.size.width + 5)
    .attr("y",box.size.height / 2);

  box.sizeIndicators.top
    .attr("x",box.size.width / 2);

  box.sizeIndicators.bottom
    .attr("x",box.size.width / 2)
    .attr("y",box.size.height + 5)

  return box;
}
