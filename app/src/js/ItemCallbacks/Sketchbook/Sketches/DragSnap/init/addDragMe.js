DragSnap.prototype.addDragMe = function() {
  const snap = this;

  const group = snap.sketch.svg
    .append("g")
    .attr("transform","translate(200,125)")
    .attr("opacity",0);

  group
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-size","18pt")
    .attr("font-family","Oswald")
    .attr("font-weight",600)
    .attr("stroke",snap.connectingColor)
    .attr("stroke-width",4)
    .html("&larr; Drag!");

  group
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-size","18pt")
    .attr("font-family","Oswald")
    .attr("fill",snap.activeColor)
    .attr("font-weight",600)
    .attr("stroke","none")
    .html("&larr; Drag!");

  return group;
}
