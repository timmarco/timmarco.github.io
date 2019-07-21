/* jshint esversion:6 */
Modeler.prototype.addSubtitle = function() {
  const modeler = this;

  let text = modeler.layers.base
    .append("text")
    .attr("x",modeler.referencePoints.subTitleCoordinates.x)
    .attr("y",modeler.referencePoints.subTitleCoordinates.y)
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-size","12pt")
    .text("Career and Projected Wins Above Replacement");

  return text;
};
