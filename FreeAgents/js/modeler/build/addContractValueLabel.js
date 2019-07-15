/* jshint esversion:6 */
Modeler.prototype.addContractValueLabel = function() {
  const modeler = this;

  text = modeler.rightPane
    .append("text")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","middle")
    .attr("font-weight","bold")
    .attr("font-size","18pt")
    .attr("x",modeler.referencePoints.contractValueCoordinates.x)
    .attr("y",modeler.referencePoints.contractValueCoordinates.y)
    .text("$150M");

  return text;
};
