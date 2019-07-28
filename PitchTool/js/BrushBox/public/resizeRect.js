/* jshint esversion:6 */
BrushBox.prototype.resizeRect = function() {
  const box = this;

  box.rect
    .attr("width",box.size.width)
    .attr("height",box.size.height);

  return box;
}
