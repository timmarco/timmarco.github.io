/* jshint esversion:6 */
ModelSlider.prototype.circleGroupMouseover = function() {
  const slider = this;
  return function() {
    if(!slider.dragLock) {
      slider.highlightCircle
        .transition()
        .duration(150)
        .attr("r",slider.styles.highlightCircleRadius);

      slider.labelText
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelActiveFontSize)
        .attr("fill",slider.styles.labelActiveFontFill);

      slider.labelGhost
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelActiveFontSize);

      slider.callbacks
        .circleGroupMouseover();

    }
  }
};
