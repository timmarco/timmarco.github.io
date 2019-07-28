/* jshint esversion:6 */
BrushBox.prototype.resized = function() {
  const box = this;

  box
    .moveGroup()
    .resizeRect()
    .moveCorners()
    .moveEdgeIndicators()
    .moveTextIndicators()
    .updateTextIndicators()
    .movePositionIndicators();

  // box.callbacks
  //   .valueChanged({
  //     "size":box.size,
  //     "coordinates":box.coordinates
  //   });


  return box;
};
