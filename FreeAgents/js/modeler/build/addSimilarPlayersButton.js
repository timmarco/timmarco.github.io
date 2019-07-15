/* jshint esversion:6 */
Modeler.prototype.addSimilarPlayersButton = function() {
  const modeler = this;

  let text = modeler.layers.base
    .append("text")
    .attr("x",modeler.referencePoints.projectionTypeCoordinates.x + 5)
    .attr("y",modeler.referencePoints.projectionTypeCoordinates.y)
    .attr("text-anchor","start")
    .attr("alignment-baseline","middle")
    .attr("font-size","10pt")
    .attr("font-weight","bold")
    .text("Similar Players")
    .attr("cursor","pointer")
    .on('click',() => {
      modeler.similarPlayersButton
        .attr("font-weight","bold");

      modeler.agingCurvesButton
        .attr("font-weight","normal");

      modeler.chart
        .showAgingSimilarPlayersProjection();
        
    })
    .on('mouseover',function() {
      modeler.tooltip
        .update("Average out the career performance of Baseball-Reference.com's <strong>10 most similar players</strong>.")
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
