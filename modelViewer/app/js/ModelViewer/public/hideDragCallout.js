ModelViewer.prototype.hideDragCallout = function() {
  const viewer = this;
  viewer.hasDragged = true;

  console.log("HIDE DRAG CALLOUT?");
  
  viewer.dragCallout
    .transition()
    .duration(250)
    .style("bottom","-5vh");

  return viewer;
}
