/* jshint esversion:6 */
ModelerPane.prototype.addTitle = function() {
  const pane = this;

  let title = pane.group
    .append("text")
    .attr("x",pane.referencePoints.titleCoordinates.x)
    .attr("y",pane.referencePoints.titleCoordinates.y)
    .attr("text-anchor","start")
    .attr("alignment-baseline","middle")
    .attr("font-weight","bold")
    .attr("font-size","18pt")
    .text("Simulate a Contract for [Player Name]");

  return title;
};
