/* jshint esversion:6 */
ModelerPane.prototype.addTitle = function() {
  const pane = this;

  let title = pane.group
    .append("text")
    .attr("x",pane.referencePoints.titleCoordinates.x)
    .attr("y",pane.referencePoints.titleCoordinates.y)
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("font-size","14pt")
    .text("Simulate a Contract for " + pane.parent.name);

  return title;
};
