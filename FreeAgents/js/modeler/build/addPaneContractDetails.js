/* jshint esversion:6 */
Modeler.prototype.addPaneContractDetails = function() {
  const modeler = this;

  let text = modeler.rightPane
    .append("text")
    .attr("x",modeler.referencePoints.contractDetailsHeadingCoordinates.x)
    .attr("y",modeler.referencePoints.contractDetailsHeadingCoordinates.y)
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-weight","bold")
    .attr("font-size","14pt")
    .text("Contract Details");


  return text;
};
