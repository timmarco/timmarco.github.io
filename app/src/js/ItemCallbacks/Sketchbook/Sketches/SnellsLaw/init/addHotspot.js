SnellsLaw.prototype.addHotspot = function() {
  const snells = this;

  return snells.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill","rgba(0,0,0,0)")
    .on("mousemove",snells.mouseMove());
}
