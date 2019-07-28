/* jshint esversion:6 */
BrushBox.prototype.rectMouseover = function(datum,index) {
  const box = this;
  return function() {
    if(!box.dragLock) {
      box.rect
        .transition()
        .duration(box.styles.rectHighlightTransition.duration)
        .attr("fill",box.styles.highlightRect.fill)
        .attr("stroke",box.styles.highlightRect.stroke)
        .attr("stroke-width",box.styles.highlightRect.strokeWidth)
        .attr("stroke-dasharray",box.styles.highlightRect.strokeDashArray);

      box.groundIndicators.line
        .transition()
        .duration(box.styles.rectHighlightTransition.duration)
        .attr("stroke-width",box.styles.groundIndicator.strokeWidth);

      box.groundIndicators.bottomCircle
        .transition()
        .duration(box.styles.rectHighlightTransition.duration)
        .attr("r",box.styles.groundIndicator.radius);

      box.groundIndicators.topCircle
        .transition()
        .duration(box.styles.rectHighlightTransition.duration)
        .attr("r",box.styles.groundIndicator.radius);

      box.groundIndicators.topText
        .text(box.sizeFormatter(box.coordinates.y));

      box.groundIndicators.bottomText
        .text(box.sizeFormatter(box.coordinates.y - box.size.height));

      box.callbacks
        .mouseover();
    }
  }
}
