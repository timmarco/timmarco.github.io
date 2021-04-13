Sketch.prototype.addDiv = function() {
  const sketch = this;
  return sketch.where
    .append("div")
    .classed("singleSketchDiv",true)
    .on("mouseover",sketch.highlight())
    .on("mouseout",sketch.unhighlight())
    .on("click",sketch.click())
}
