/* jshint esversion:6 */
ModelerPane.prototype.addGroup = function(where) {
  const pane = this;

  group = where
    .append("g")
    .attr("transform","translate("+pane.referencePoints.offscreen.x+","+pane.referencePoints.offscreen.y+")");

  return group;
};
