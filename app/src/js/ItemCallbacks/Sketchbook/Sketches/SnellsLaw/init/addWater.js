SnellsLaw.prototype.addWater = function() {
  const snells = this;
  return snells.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("x",-5)
    .attr("y",250)
    .attr("fill",d3.schemeCategory10[0])
    .attr("stroke",d3.schemeCategory10[5])
    .attr("stroke-width",3)
    .attr("stroke-dasharray","5,20");
}
