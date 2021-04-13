SnellsLaw.prototype.addRefractedArc = function() {
  const snells = this;

  const group = snells.sketch.svg
    .append("g")
    .attr("transform","translate(250,250) rotate(90)");

  return group
    .append("path")
    .attr("stroke",d3.schemeCategory10[1])
    .attr("fill","none")
    .attr("stroke-width",5)
    .attr("d",snells.arcGenerator.startAngle(Math.PI / 4).endAngle(Math.PI / 2));

}
