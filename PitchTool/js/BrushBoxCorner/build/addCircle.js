/* jshint esversion:6 */
BrushBoxCorner.prototype.addCircle = function() {
  const corner = this;

  let circle = corner.group
    .append("circle")
    .attr("r",corner.parent.styles.defaultCorner.radius)
    .attr("fill",corner.parent.styles.defaultCorner.fill)
    .attr("stroke",corner.parent.styles.defaultCorner.stroke)
    .attr("stroke-width",corner.parent.styles.defaultCorner.strokeWidth);

  return circle;
}
