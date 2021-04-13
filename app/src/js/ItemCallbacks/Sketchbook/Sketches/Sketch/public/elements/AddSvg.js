Sketch.prototype.AddSvg = function() {
  const sketch = this;
  sketch.svg = sketch.div
    .append("svg")
    .classed("svgSketch",true)
    .attr("width",640)
    .attr("height",360)
    .style("user-select","none");

  return sketch;
}
