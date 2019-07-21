/* jshint esversion:6 */
Modeler.prototype.addProjectionType = function() {
  const modeler = this;

  let text = modeler.layers.base
    .append("text")
    .attr("x",modeler.referencePoints.projectionTypeCoordinates.x)
    .attr("y",modeler.referencePoints.projectionTypeCoordinates.y)
    .attr("text-anchor","end")
    .attr("dominant-baseline","middle")
    .attr("font-size","10pt")
    .attr("font-weight","normal")
    .text("Projection Basis")
    .on('mouseover',function() {
      modeler.tooltip
        .update("Select a method for projected future player performance.")
        .show()
        .move();
    })
    .on('mousemove',function() {
      modeler.tooltip
        .move();
    })
    .on('mouseout',function() {
      modeler.tooltip
        .hide();
    });


  return text;
};
