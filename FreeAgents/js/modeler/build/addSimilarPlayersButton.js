/* jshint esversion:6 */
Modeler.prototype.addSimilarPlayersButton = function() {
  const modeler = this;

  let group = modeler.layers.base
    .append("g")
    .attr("transform","translate("+250+","+modeler.referencePoints.projectionTypeCoordinates.y+")");

  let rect = group
    .append("rect")
    .attr("fill","none");

  let text = group
    .append("text")
    .attr("x",0)
    .attr("y",0)
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("font-size","10pt")
    .attr("fill","white")
    .text("Similar Players")
    .attr("cursor","pointer")
    .on('click',() => {

      modeler.agingCurvesButton
        .select("text")
        .attr("fill","black")
        .attr("font-weight","normal");

      modeler.agingCurvesButton
        .select("rect")
        .attr("fill","none")

      rect
        .attr("fill","#ed553b");

      text
        .attr("fill","white");

      modeler.chart
        .showAgingSimilarPlayersProjection();

        if(modeler.projectionParameters) {
          modeler
            .calculateContractValues();
        }


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

    let textSize = text.node().getBBox();

    rect
      .attr("x",-textSize.width * 0.025)
      .attr("y",-textSize.height * (1.25/2))
      .attr("width",textSize.width * 1.05)
      .attr("height",textSize.height * 1.1)
      .attr("fill","#ed553b");


  return group;
};
