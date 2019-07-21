/* jshint esversion:6 */
ModelerPane.prototype.addSalaryLabel = function() {
  const pane = this;

  let text = pane.group
    .append("text")
    .attr("x",pane.referencePoints.overlaySalaryCoordinates.x)
    .attr("y",pane.referencePoints.overlaySalaryCoordinates.y)
    .attr("font-size","12pt")
    .text("Contract Cost");


  return text;
};
