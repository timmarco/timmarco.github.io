/* jshint esversion:6 */
BrushBoxCorner.prototype.addHotspot = function() {
  const corner = this;

  let circle = corner.group
    .append("circle")
    .attr("r",corner.parent.styles.cornerHotspot.radius)
    .attr("fill",corner.parent.styles.cornerHotspot.fill)
    .attr("stroke",corner.parent.styles.cornerHotspot.stroke)
    .attr("stroke-width",corner.parent.styles.cornerHotspot.strokeWidth);


  return circle;
}
