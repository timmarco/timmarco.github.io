SnellsLaw.prototype.addSource = function() {
  const snells = this;
  return snells.sketch.svg
    .append("circle")
    .attr("r",10)
    .attr("fill",d3.schemeCategory10[3])
    .attr("cx",40)
    .attr("cy",50)
    .attr("r",0);
}
