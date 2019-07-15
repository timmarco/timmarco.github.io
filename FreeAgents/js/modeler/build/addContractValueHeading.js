/* jshint esversion:6 */
Modeler.prototype.addContractValueHeading = function() {
  const modeler = this;

  let text = modeler.rightPane
    .append("text")
    .attr("font-size","10pt")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","alphabetic")
    .attr("x",modeler.referencePoints.contractValueHeadingCoordinates.x)
    .attr("y",modeler.referencePoints.contractValueHeadingCoordinates.y)
    .text("Projected Production");

  return text;
};
