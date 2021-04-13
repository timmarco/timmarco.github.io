DragSnap.prototype.addDestination = function() {
  const snap = this;
  return snap.sketch.svg
    .append("circle")
    .attr("cx",500)
    .attr("cy",300)
    .attr("r",50)
    .attr("fill",snap.backgroundColor)
    .attr("stroke-width",10)
    .attr("stroke-dasharray","20,20")
    .attr("stroke",snap.activeColor)
    .on("mouseover",() => {
      if(snap.isDragging == false) { return }
      snap.canDrop = true;
      snap.destination
        .attr("stroke-dasharray","0")
        .transition()
        .duration(250)
        .attr("fill",snap.activeColor);
    })
    .on("mouseout",() => {
      if(snap.isDragging == false) { return }
      snap.canDrop = false;
      snap.destination
        .attr("stroke-dasharray","20,20")
        .attr("fill",snap.backgroundColor)
    })
}
