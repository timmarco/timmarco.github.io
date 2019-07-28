/* jshint esversion:6 */
BrushBoxCorner.prototype.groupMouseover = function() {
  const corner = this;
  return function() {

    if(!corner.parent.dragLock) {
      corner.hotspot
        .transition()
        .duration(corner.parent.styles.cornerHotspotTransition.duration)
        .attr("r",corner.parent.styles.highlightCorner.radius)
        .attr("fill",corner.parent.styles.highlightCorner.fill)
        .attr("stroke",corner.parent.styles.highlightCorner.stroke)
        .attr("stroke-width",corner.parent.styles.highlightCorner.strokeWidth);

      corner.callbacks
        .mouseover();
    }
  }
}
