/* jshint esversion:6 */
ModelSlider.prototype.groupMouseout = function(d,i) {
  const slider = this;

  return function() {
    if(!slider.dragLock) {
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
        .groupMouseout();

    }
  };

}
