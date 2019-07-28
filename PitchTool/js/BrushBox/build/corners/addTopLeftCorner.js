/* jshint esversion:6 */
BrushBox.prototype.addTopLeftCorner = function() {
  const box = this;
  let corner = new BrushBoxCorner({
    "parent":box,
    "coordinates":{
      "x":0,
      "y":0
    },
    "callbacks":{
      "checkBounds":checkBounds,
      "moved":moved,
      "mouseover":box.showIndicators(["left","top"]),
      "mouseout":box.hideIndicators(["left","top"])
    }
  });

  return corner;

  function checkBounds() {
    let bounds = {};
    bounds.min = {"x":-Infinity,"y":-Infinity};
    bounds.max = {"x":box.size.width - 10,"y":box.size.height - 10};
    return bounds;
  }

  function moved(coordinates) {
    box.coordinates.x += coordinates.x;
    box.coordinates.y += coordinates.y;
    box.size.width -= coordinates.x;
    box.size.height -= coordinates.y;
    // box.size.height = coordinates.y;
    // box.size.width -= coordinates.x

    box
      .resized();

  }
}
