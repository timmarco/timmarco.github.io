/* jshint esversion:6 */
Modeler.prototype.addEditMarketValueButton = function() {
  const modeler = this;
  let text = modeler.rightPane
    .append("text")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","alphabetic")
    .attr("font-size","10pt")
    .attr("cursor","pointer")
    .attr("x",modeler.referencePoints.winValueButtonCoordinates.x)
    .attr("y",modeler.referencePoints.winValueButtonCoordinates.y)
    .text("Edit Market Value");

  return text;
};
