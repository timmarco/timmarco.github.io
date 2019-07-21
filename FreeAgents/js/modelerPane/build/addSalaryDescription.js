/* jshint esversion:6 */
ModelerPane.prototype.addSalaryDescription = function() {
  const pane = this;

  let div = pane.group
    .append("foreignObject")
    .attr("font-size","10pt")
    .attr("x",pane.referencePoints.overlaySalaryDescriptionCoordinates.x)
    .attr("y",pane.referencePoints.overlaySalaryDescriptionCoordinates.y)
    .attr("width",pane.referencePoints.overlayColumnWidth)
    .attr("height",pane.referencePoints.overlayDescriptionHeight)
    .style("text-align","left")
    .html("<strong>Drag</strong> the circles below to set the contract value.");

  return div;
};
