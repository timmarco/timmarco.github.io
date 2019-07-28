/* jshint esversion:6 */
ModelSlider.prototype.addTrack = function() {
  const slider = this;

  let track = slider.layers.track
    .append("rect")
    .attr("x",slider.referencePoints.xMin)
    .attr("y",-slider.styles.trackHeight / 2)
    .attr("height",slider.styles.trackHeight)
    .attr("width",slider.referencePoints.effectiveWidth)
    .attr("fill",slider.styles.trackFill);


  return track;
}
