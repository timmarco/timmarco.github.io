RandomWalk.prototype.addHistogram = function() {
  const randomWalk = this;
  return randomWalk.sketch.svg
    .append("path")
    .attr("fill",d3.schemeCategory10[3])
    .attr("stroke","black")
    .attr("stroke-width",2);
}
