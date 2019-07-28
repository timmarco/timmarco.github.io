/* jshint esversion:6 */
BrushBox.prototype.updateTextIndicators = function() {
  const box = this;

  box.sizeIndicators.top
    .text(box.sizeFormatter(box.size.width));

  box.sizeIndicators.bottom
    .text(box.sizeFormatter(box.size.width));

  box.sizeIndicators.left
    .text(box.sizeFormatter(box.size.height));

  box.sizeIndicators.right
    .text(box.sizeFormatter(box.size.height));

  return box;
}
