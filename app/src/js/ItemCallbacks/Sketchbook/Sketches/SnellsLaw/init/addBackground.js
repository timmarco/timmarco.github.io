SnellsLaw.prototype.addBackground = function() {
  const snells = this;
  return snells.sketch.svg
    .append("rect")
    .attr("fill","#eee")
    .attr("width",640)
    .attr("height",360);
}
