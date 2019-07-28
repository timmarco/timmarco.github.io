/* jshint esversion:6 */
ModelSlider.prototype.circleGroupDragStart = function() {
  const slider = this;

  return function() {
    slider.dragLock = true;
    slider.highlightCircle
      .attr("opacity",slider.styles.dragCircleOpacity);

    slider.callbacks
      .dragStart();
  }
}
