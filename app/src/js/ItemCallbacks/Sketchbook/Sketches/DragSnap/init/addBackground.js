DragSnap.prototype.addBackground = function() {
  const snap = this;
  return snap.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill",snap.backgroundColor);
}
