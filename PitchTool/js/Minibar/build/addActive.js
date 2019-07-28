/* jshint esversion:6 */
Minibar.prototype.addActive = function() {
  const bar = this;

  let active = bar.layers.active
    .append("rect")
    .attr("x",bar.referencePoints.minX)
    .attr("y",bar.referencePoints.verticalMidline - (bar.styles.active.height / 2 ))
    .attr("height",bar.styles.active.height)
    .attr("fill",bar.styles.active.fill)
    .attr("stroke",bar.styles.active.stroke)
    .attr("stroke-width",bar.styles.active.strokeWidth);

  return active;
};
