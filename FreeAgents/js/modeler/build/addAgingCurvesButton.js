/* jshint esversion:6 */
Modeler.prototype.addAgingCurvesButton = function() {
  const modeler = this;

  let text = modeler.layers.base
    .append("text")
    .attr("x",modeler.similarPlayersButton.node().getBBox().width + modeler.referencePoints.projectionTypeCoordinates.x + 10)
    .attr("y",modeler.referencePoints.projectionTypeCoordinates.y)
    .attr("font-size","10pt")
    .attr("font-weight","normal")
    .attr("text-anchor","start")
    .attr("alignment-baseline","middle")
    .attr("cursor","pointer")
    .text("Aging Curve")
    .on('click',() => {
      modeler.similarPlayersButton
        .attr("font-weight","normal");

      modeler.agingCurvesButton
        .attr("font-weight","bold");

      modeler.chart
        .showAgingCurveProjection();
    })
    .on('mouseover',function() {
      modeler.tooltip
        .update("The total surplus value derived by comparing the total contract cost to the value of projected performance over the length of the contract.")
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
