SnellsLaw.prototype.addNormal = function() {
  const snells = this;
  return snells.sketch.svg
    .append("line")
    .attr("x1",250)
    .attr("x2",250)
    .attr("y1",0)
    .attr("y2",500)
    .attr("stroke","#999")
    .attr("stroke-width",2)
    .attr("stroke-dasharray","10,10");
}
