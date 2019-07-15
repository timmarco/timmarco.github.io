/* jshint esversion:6 */
Modeler.prototype.addEditSalaryButton = function() {
  const modeler = this;
  let text = modeler.rightPane
    .append("text")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","alphabetic")
    .attr("font-weight","bold")
    .attr("font-size","10pt")
    .attr("cursor","pointer")
    .attr("x",modeler.referencePoints.editSalaryButtonCoordinates.x)
    .attr("y",modeler.referencePoints.editSalaryButtonCoordinates.y)
    .text("Edit Salary");

  return text;
};
