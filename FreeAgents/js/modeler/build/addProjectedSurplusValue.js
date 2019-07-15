/* jshint esversion:6 */
Modeler.prototype.addProjectedSurplusValue = function() {
  const modeler = this;

  let text = modeler.rightPane
    .append("text")
    .attr("font-weight","bold")
    .attr("font-size","18pt")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","middle")
    .attr("x",modeler.referencePoints.projectedSurplusValueCoordinates.x)
    .attr("y",modeler.referencePoints.projectedSurplusValueCoordinates.y)
    .text("");

  return text;
};
