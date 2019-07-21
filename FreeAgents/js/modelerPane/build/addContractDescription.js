/* jshint esversion:6 */
ModelerPane.prototype.addContractDescription = function() {
  const pane = this;

  let div = pane.group
    .append("foreignObject")
    .attr("font-size","10pt")
    .attr("x",pane.referencePoints.overlayContractDescriptionCoordinates.x)
    .attr("y",pane.referencePoints.overlayContractDescriptionCoordinates.y)
    .attr("width",pane.referencePoints.overlayColumnWidth)
    .attr("height",pane.referencePoints.overlayDescriptionHeight)
    .style("text-align","left")
    .html("<strong>Drag</strong> the circle below to set the contract length.");

  return div;
};
