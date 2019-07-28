/* jshint esversion:6 */
BrushBox.prototype.rectMouseout = function(datum,index) {
  const box = this;

  return function() {

    box.rect
      .transition()
      .duration(box.styles.rectHighlightTransition.duration)
      .attr("fill",box.styles.defaultRect.fill)
      .attr("stroke",box.styles.defaultRect.stroke)
      .attr("stroke-width",box.styles.defaultRect.strokeWidth)
      .attr("stroke-dasharray",box.styles.defaultRect.strokeDashArray);

    box.groundIndicators.line
      .transition()
      .duration(box.styles.rectHighlightTransition.duration)
      .attr("stroke-width",0);

    box.groundIndicators.bottomCircle
      .transition()
      .duration(box.styles.rectHighlightTransition.duration)
      .attr("r",0);

    box.groundIndicators.topCircle
      .transition()
      .duration(box.styles.rectHighlightTransition.duration)
      .attr("r",0);

    box.groundIndicators.bottomText
      .text("");

    box.groundIndicators.topText
      .text("");


    box.callbacks
      .mouseout();
  }
}
