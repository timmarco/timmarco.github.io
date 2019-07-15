/* jshint esversion:6 */
ModelerPane.prototype.transitionIn = function() {
  const pane = this;

  pane.group
    .transition()
    .duration(500)
    .attr("transform","translate("+pane.referencePoints.onscreen.x+","+pane.referencePoints.onscreen.y+")");

  return pane;
};
