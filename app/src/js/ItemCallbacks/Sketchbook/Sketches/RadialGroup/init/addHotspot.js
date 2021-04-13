RadialGroup.prototype.addHotspot = function() {
  const radial = this;
  return radial.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill","rgba(0,0,0,0)")
    .on("mousemove",radial.backgroundMouseMove());
}
