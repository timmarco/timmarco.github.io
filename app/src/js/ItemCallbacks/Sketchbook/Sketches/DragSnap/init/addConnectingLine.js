DragSnap.prototype.addConnectingLine = function() {
  const snap = this;
  return snap.sketch.svg
    .append("line")
    .attr("stroke",snap.connectingColor);
}
