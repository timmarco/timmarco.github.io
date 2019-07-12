/* jshint esversion:6 */
ModelerPane.prototype.addSalaryGroup = function() {
  const pane = this;

  let group = pane.group
    .append("g")
    .attr("transform","translate("+pane.referencePoints.salaryGroupCoordinates.x+","+pane.referencePoints.salaryGroupCoordinates.y+")");

  return group;
}
