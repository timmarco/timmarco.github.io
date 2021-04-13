RandomWalk.prototype.addLineGroup = function() {
  const randomWalk = this;
  return randomWalk.sketch.svg
    .append("g");
}
