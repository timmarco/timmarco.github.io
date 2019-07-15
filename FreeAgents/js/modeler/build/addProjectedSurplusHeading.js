/* jshint esversion:6 */
Modeler.prototype.addProjectedSurplusHeading = function() {
  const modeler = this;

  let text = modeler.rightPane
    .append("text")
    .attr("x",modeler.referencePoints.projectedSurplusHeadingCoordinates.x)
    .attr("y",modeler.referencePoints.projectedSurplusHeadingCoordinates.y)
    .attr("text-anchor","middle")
    .attr("alignment-baseline","alphabetic")
    .attr("font-size","10pt")
    .text("Projected Surplus");

  return text;
};
