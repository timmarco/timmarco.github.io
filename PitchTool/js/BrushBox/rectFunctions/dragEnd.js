/* jshint esversion:6 */
BrushBox.prototype.rectDragEnd = function() {
  const box = this;
  return function() {

    box.callbacks
      .valueChanged({
        "size":box.size,
        "coordinates":box.coordinates
      });

    box.callbacks
      .dragEnd();

  }
};
