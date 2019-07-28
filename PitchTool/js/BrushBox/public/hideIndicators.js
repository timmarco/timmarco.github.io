/* jshint esversion:6 */
BrushBox.prototype.hideIndicators = function(indicators) {
  const box = this;

  return function() {
    indicators.forEach((indicator) => {
      box.edgeIndicators[indicator]
        .transition()
        .duration(box.styles.cornerHotspotTransition)
        .attr("stroke-width",0);

      box.sizeIndicators[indicator]
        .transition()
        .duration(box.styles.cornerHotspotTransition)
        .attr("stroke-width",box.styles.edgeIndicators.strokeWidth)
        .attr("opacity",0);

    });
  }

}
