/* jshint esversion:6 */
ModelerPane.prototype.addSalaryDescription = function() {
  const pane = this;

  let div = pane.group
    .append("foreignObject")
    .attr("x",pane.referencePoints.overlaySalaryDescriptionCoordinates.x)
    .attr("y",pane.referencePoints.overlaySalaryDescriptionCoordinates.y)
    .attr("width",pane.referencePoints.overlayColumnWidth)
    .attr("height",pane.referencePoints.overlayDescriptionHeight)
    .html("Select a contract average annual value ($AAV):");

  return div;
};
