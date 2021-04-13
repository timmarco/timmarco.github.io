DragSnap.prototype.addAntsMarching = function() {
  const snap = this;
  return snap.sketch.svg
    .append("line")
    .attr("stroke",snap.antColor)
    .attr("stroke-dasharray","10,10");
}
