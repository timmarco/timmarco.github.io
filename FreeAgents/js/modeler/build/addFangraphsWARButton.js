/* jshint esversion:6 */
Modeler.prototype.addFangraphsWARButton = function() {
  const modeler = this;

  let text = modeler.layers.base
    .append("text")
    .attr("x",modeler.BBRefWARButton.node().getBBox().width + modeler.referencePoints.warFormulationCoordinates.x + 10)
    .attr("y",modeler.referencePoints.warFormulationCoordinates.y)
    .attr("text-anchor","start")
    .attr("alignment-baseline","middle")
    .attr("font-size","10pt")
    .attr("font-weight","normal")
    .attr("cursor","pointer")
    .text("Fangraphs")
    .on('click',() => {
      modeler.BBRefWARButton
        .attr("font-weight","normal");

      modeler.fangraphsWARButton
        .attr("font-weight","bold");

    })
    .on('mouseover',function() {
      modeler.tooltip
        .update("Click to select <strong>Fangraph's</strong> Wins Above Replacement metric (fWAR).")
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
