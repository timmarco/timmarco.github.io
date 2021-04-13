Sketch.prototype.addImage = function() {
  const sketch = this;
  return sketch.div
    .append("img")
    .classed("sketchImage",true);
}
