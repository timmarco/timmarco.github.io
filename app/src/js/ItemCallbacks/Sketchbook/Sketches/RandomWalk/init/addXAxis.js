RandomWalk.prototype.addXAxis = function() {
  const randomWalk = this;
  const axis = d3.axisBottom(randomWalk.walkScales.x);
  randomWalk.xAxisGroup
    .call(axis);
  return axis;
}
