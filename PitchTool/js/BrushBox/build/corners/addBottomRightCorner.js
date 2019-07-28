/* jshint esversion:6 */
BrushBox.prototype.addBottomRightCorner = function() {
  const box = this;

  let corner = new BrushBoxCorner({
    "parent":box,
    "coordinates":{
      "x":box.size.width,
      "y":box.size.height
    },
    "callbacks":{
      "checkBounds":checkBounds,
      "moved":moved,
      "mouseover":box.showIndicators(["right","bottom"]),
      "mouseout":box.hideIndicators(["right","bottom"])
    }
  });

  return corner;

  function checkBounds() {
    let bounds = {};
    bounds.max = {"x":Infinity,"y":Infinity};
    bounds.min = {"x":10,"y":10};
    return bounds;
  }

  function moved(coordinates) {
    box.size.width = coordinates.x;
    box.size.height = coordinates.y;

    box
      .resized();
  }
}
