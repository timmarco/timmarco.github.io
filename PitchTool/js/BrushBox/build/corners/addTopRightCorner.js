/* jshint esversion:6 */
BrushBox.prototype.addTopRightCorner = function() {
  const box = this;
  let corner = new BrushBoxCorner({
    "parent":box,
    "coordinates":{
      "x":box.size.width,
      "y":0
    },
    "callbacks":{
      "checkBounds":checkBounds,
      "moved":moved,
      "mouseover":box.showIndicators(["top","right"]),
      "mouseout":box.hideIndicators(["top","right"])
    }
  });

  return corner;

  function checkBounds() {
    let bounds = {};
    bounds.min = {"x":10,"y":-Infinity};
    bounds.max = {"x":Infinity,"y":box.size.height - 10};
    return bounds;
  }

  function moved(coordinates) {
    box.size.width = coordinates.x;
    box.coordinates.y += coordinates.y;
    box.size.height -= coordinates.y;

    box
      .resized();

  }
}
