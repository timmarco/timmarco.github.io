/* jshint esversion:6 */
ModelSlider.prototype.circleGroupDragEnd = function() {
  const slider = this;

  return function() {
    slider.dragLock = false;
    slider.highlightCircle
      .attr("opacity",slider.styles.highlightCircleOpacity);

      slider.highlightCircle
        .transition()
        .duration(150)
        .attr("r",slider.styles.circleRadius);

      slider.labelText
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelFontSize)
        .attr("fill",slider.styles.labelFontFill);

      slider.labelGhost
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelFontSize);

      slider.callbacks
        .dragEnd();

  }

}
