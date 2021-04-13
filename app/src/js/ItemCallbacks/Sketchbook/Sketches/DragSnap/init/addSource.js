DragSnap.prototype.addSource = function() {
  const snap = this;
  return snap.sketch.svg
    .append("circle")
    .attr("cx",100)
    .attr("cy",125)
    .attr("r",50)
    .attr("fill",snap.activeColor)
    .attr("stroke",snap.connectingColor)
    .attr("stroke-width",5)
    .on("mouseover",() => {
      if(snap.isDragging) { return }
      snap.source
        .transition()
        .duration(350)
        .ease(d3.easeBackOut.overshoot(100))
        .attr("r",50.1)
    })
    .on("mouseout",() => {
      if(snap.isDragging) { return }
      snap.source
        .attr("r",50);
    })
    .call(
      d3.drag()
        .on("start",snap.dragStart())
        .on("drag",snap.dragging())
        .on("end",snap.dragEnd())
    );
}
