RandomWalk.prototype.addXAxisGroup = function() {
  const randomWalk = this;
  return randomWalk.sketch.svg
    .append("g")
    .attr("transform","translate(0,180)");
}
