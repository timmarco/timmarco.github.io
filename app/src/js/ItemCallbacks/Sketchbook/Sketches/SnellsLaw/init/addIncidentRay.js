SnellsLaw.prototype.addIncidentRay = function() {
  const snells = this;
  return snells.sketch.svg
    .append("line")
    .attr("x1",40)
    .attr("y1",50)
    .attr("x2",250)
    .attr("y2",250)
    .attr("stroke",d3.schemeCategory10[3])
    .attr("stroke-width",5)
    .attr("stroke-dasharray","15,15");
}
