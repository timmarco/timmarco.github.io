RandomWalk.prototype.addLine = function() {
  const randomWalk = this;
  return randomWalk.lineGroup
    .append("path")
    .attr("stroke",d3.schemeCategory10[0])
    .attr("fill","none")
    .attr("stroke-width",3);
}
