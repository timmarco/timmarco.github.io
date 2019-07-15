/* jshint esversion:6 */
Modeler.prototype.addBBRefWARButton = function() {
  const modeler = this;

  let text = modeler.layers.base
    .append("text")
    .attr("x",modeler.referencePoints.warFormulationCoordinates.x + 5)
    .attr("y",modeler.referencePoints.warFormulationCoordinates.y)
    .attr("text-anchor","start")
    .attr("alignment-baseline","middle")
    .attr("font-size","10pt")
    .attr("font-weight","bold")
    .text("Baseball-Reference")
    .attr("cursor","pointer")
    .on('click',() => {
      modeler.BBRefWARButton
        .attr("font-weight","bold");

      modeler.fangraphsWARButton
        .attr("font-weight","normal");
    })
    .on('mouseover',function() {
      modeler.tooltip
        .update("Click to select <strong>Baseball-Reference.com's</strong> Wins Above Replacement metric (bWAR).")
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
