RandomWalk.prototype.addBackground = function() {
  const randomWalk = this;
  return randomWalk.sketch.svg
    .append("rect")
    .attr("fill","#eee")
    .attr("width",640)
    .attr("height",360);
}
