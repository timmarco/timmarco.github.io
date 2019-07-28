/* jshint esversion:6 */
Minibar.prototype.addTrack = function() {
  const bar = this;

  let track = bar.layers.track
    .append("rect")
    .attr("x",bar.referencePoints.minX)
    .attr("y",bar.referencePoints.verticalMidline - (bar.styles.track.height / 2))
    .attr("width",bar.referencePoints.effectiveWidth)
    .attr("height",bar.styles.track.height)
    .attr("fill",bar.styles.track.fill)
    .attr("stroke",bar.styles.track.stroke)
    .attr("stroke-width",bar.styles.track.strokeWidth);

  return track;
}
