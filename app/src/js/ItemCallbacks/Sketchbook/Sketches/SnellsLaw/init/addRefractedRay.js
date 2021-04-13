SnellsLaw.prototype.addRefractedRay = function() {
  const snells = this;
  return snells.sketch.svg
    .append("line")
    .attr("x1",250)
    .attr("x2",460)
    .attr("y1",250)
    .attr("y2",450)
    .attr("stroke",d3.schemeCategory10[1])
    .attr("stroke-width",5)
    .attr("stroke-dasharray","15,15");
}
