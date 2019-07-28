/* jshint esversion:6 */
BrushBox.prototype.addBottomLeftCorner = function() {
  const box = this;

  let corner = new BrushBoxCorner({
    "parent":box,
    "coordinates": {
      "x":0,
      "y":box.size.height
    },
    "callbacks":{
      "checkBounds":checkBounds,
      "moved":moved,
      "mouseover":box.showIndicators(["left","bottom"]),
      "mouseout":box.hideIndicators(["left","bottom"])
    }
  });

  return corner;

  function checkBounds() {
    let bounds = {};
    bounds.min = {"x":-Infinity,"y":10};
    bounds.max = {"x":box.size.width - 10,"y":Infinity};
    return bounds;
  }

  function moved(coordinates) {
    box.coordinates.x += coordinates.x;
    box.size.height = coordinates.y;
    box.size.width -= coordinates.x

    box
      .resized();

  }
}
