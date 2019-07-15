/* jshint esversion:6 */
ModelerPane.prototype.addContractDescription = function() {
  const pane = this;

  let div = pane.group
    .append("foreignObject")
    .attr("x",pane.referencePoints.overlayContractDescriptionCoordinates.x)
    .attr("y",pane.referencePoints.overlayContractDescriptionCoordinates.y)
    .attr("width",pane.referencePoints.overlayColumnWidth)
    .attr("height",pane.referencePoints.overlayDescriptionHeight)
    .html("Select a contract length:");

  return div;
};
