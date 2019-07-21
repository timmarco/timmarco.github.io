/* jshint esversion:6 */
ModelerPane.prototype.addMarketValueDescription = function() {
  const pane = this;

  let div = pane.group
    .append("foreignObject")
    .attr("font-size","10pt")
    .attr("x",pane.referencePoints.overlayWinValueDescriptionCoordinates.x)
    .attr("y",pane.referencePoints.overlayWinValueDescriptionCoordinates.y)
    .attr("width",pane.referencePoints.overlayColumnWidth)
    .attr("height",pane.referencePoints.overlayDescriptionHeight)
    .style("text-align","left")
    .html("<strong>Drag</strong> the circles below to set the market rate for wins each season.");

  return div;
};
