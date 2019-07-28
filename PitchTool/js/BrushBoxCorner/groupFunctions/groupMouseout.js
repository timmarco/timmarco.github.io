/* jshint esversion:6 */
BrushBoxCorner.prototype.groupMouseout = function() {
  const corner = this;
  return function() {

    if(!corner.parent.dragLock) {
      corner.hotspot
        .transition()
        .duration(corner.parent.styles.cornerHotspotTransition.duration)
        .attr("r",corner.parent.styles.cornerHotspot.radius)
        .attr("fill",corner.parent.styles.cornerHotspot.fill)
        .attr("stroke",corner.parent.styles.cornerHotspot.stroke)
        .attr("stroke-width",corner.parent.styles.cornerHotspot.strokeWidth);

      
      corner.callbacks
        .mouseout();
    }

  }
}
