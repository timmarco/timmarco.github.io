/* jshint esversion:6 */
ModelSlider.prototype.addTextGhost = function() {
  const slider = this;

  let text = slider.circleGroup
    .append("text")
    .attr("x",10)
    .attr("y",0)
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("font-size",slider.styles.labelFontSize)
    .attr("font-family",slider.styles.labelFontFamily)
    .attr("stroke",slider.styles.labelGhostStroke)
    .attr("stroke-width",slider.styles.labelGhostStrokeWidth)
    .attr("opacity",slider.styles.labelFontOpacity)
    .text("LABEL TEXT!");

  return text;
}
