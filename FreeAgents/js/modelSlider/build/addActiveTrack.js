/* jshint esversion:6 */
ModelSlider.prototype.addActiveTrack = function() {
  const slider = this;

  let track = slider.layers.track
    .append("rect")
    .attr("x",slider.referencePoints.xMin)
    .attr("y",-slider.styles.trackHeight / 2)
    .attr("height",slider.styles.trackHeight)
    .attr("width",0)
    .attr("fill",slider.styles.activeTrackFill);


  return track;
}
