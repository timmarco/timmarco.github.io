/* jshint esversion:6 */
ModelerPane.prototype.addYearGroup = function() {
  const pane = this;

  let group = pane.group
    .append("g")
    .attr("transform","translate("+pane.referencePoints.yearGroupCoordinates.x+","+pane.referencePoints.yearGroupCoordinates.y+")");

  return group;
}
