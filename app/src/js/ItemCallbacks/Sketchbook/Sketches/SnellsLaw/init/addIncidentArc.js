SnellsLaw.prototype.addIncidentArc = function() {
  const snells = this;

  const group = snells.sketch.svg
    .append("g")
    .attr("transform","translate(250,250)");

  return group
    .append("path")
    .attr("stroke",d3.schemeCategory10[3])
    .attr("fill","none")
    .attr("stroke-width",5)
    .attr("d",snells.arcGenerator.startAngle(-Math.PI / 2).endAngle(0));
}
