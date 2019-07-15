/* jshint esversion:6 */
ModelerPane.prototype.addMarketValueDescription = function() {
  const pane = this;

  let div = pane.group
    .append("foreignObject")
    .attr("x",pane.referencePoints.overlayWinValueDescriptionCoordinates.x)
    .attr("y",pane.referencePoints.overlayWinValueDescriptionCoordinates.y)
    .attr("width",pane.referencePoints.overlayColumnWidth)
    .attr("height",pane.referencePoints.overlayDescriptionHeight)
    .html("Select a fair market value per WAR by year: ");

  return div;
};
