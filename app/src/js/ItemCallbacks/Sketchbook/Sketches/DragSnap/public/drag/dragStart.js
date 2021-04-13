DragSnap.prototype.dragStart = function() {
  const snap = this;
  return () => {
    snap.isDragging = true;

    snap.destination
      .transition()
      .duration(350)
      .ease(d3.easeBackOut.overshoot(50))
      .attr("r",51);

    snap.connectingLine
      .attr("x1",100)
      .attr("y1",125)
      .attr("x2",100)
      .attr("y2",125);

    snap.antsMarching
      .attr("x1",100)
      .attr("y1",125)
      .attr("x2",100)
      .attr("y2",125);

    snap.dragMe
      .transition()
      .duration(250)
      .attr("opacity",0)

  }
}
