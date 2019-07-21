/* jshint esversion:6 */
Modeler.prototype.addTitle = function() {
  const modeler = this;

  text = modeler.layers.base
    .append("text")
    .attr("x",modeler.referencePoints.nameCoordinates.x)
    .attr("y",modeler.referencePoints.nameCoordinates.y)
    .attr("font-size","24pt")
    .attr("font-weight","bold")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .text("");

  return text;
};
