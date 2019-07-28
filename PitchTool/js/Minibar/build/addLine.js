/* jshint esversion:6 */
Minibar.prototype.addLine = function() {
  const bar = this;
  let line = bar.layers.line
    .append("line")
    .attr("stroke",bar.styles.line.stroke)
    .attr("stroke-width",bar.styles.line.strokeWidth)
    .attr("y1",bar.referencePoints.verticalMidline - (bar.styles.line.height / 2))
    .attr("y2",bar.referencePoints.verticalMidline + (bar.styles.line.height / 2));

  return line;
};
