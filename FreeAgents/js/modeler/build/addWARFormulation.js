/* jshint esversion:6 */
Modeler.prototype.addWARFormulation = function() {
  const modeler = this;

  text = modeler.layers.base
    .append("text")
    .attr("x",modeler.referencePoints.warFormulationCoordinates.x)
    .attr("y",modeler.referencePoints.warFormulationCoordinates.y)
    .attr("text-anchor","end")
    .attr("alignment-baseline","middle")
    .attr("font-size","10pt")
    .text("WAR Formulation: ")
    .attr("cursor","pointer")
    .on('mouseover',function() {
      modeler.tooltip
        .update("Select the basis for measuring player production.")
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
