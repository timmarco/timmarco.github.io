/* jshint esversion:6 */
ModelerPane.prototype.transitionOut = function() {
  const pane = this;

  pane.group
    .transition()
    .duration(225)
    .attr("transform","translate("+pane.referencePoints.offscreen.x+","+pane.referencePoints.offscreen.y+")");

  return pane;
};
