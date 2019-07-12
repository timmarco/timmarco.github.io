/* jshint esversion:6 */
ModelerPane.prototype.addWinValueGroup = function() {
  const pane = this;

  let group = pane.group
    .append("g")
    .attr("transform","translate("+pane.referencePoints.winValueGroupCoordinates.x+","+pane.referencePoints.winValueGroupCoordinates.y+")");

  return group;
}
