/* jshint esversion:6 */
ModelerPane.prototype.addContractDurationLabel = function() {
  const pane = this;

  let text = pane.group
    .append("text")
    .attr("x",pane.referencePoints.overlayContractCoordinates.x)
    .attr("y",pane.referencePoints.overlayContractCoordinates.y)
    .attr("font-size","12pt")
    // .attr("font-weight","bold")
    .text("Contract Duration");

  return text;
};
