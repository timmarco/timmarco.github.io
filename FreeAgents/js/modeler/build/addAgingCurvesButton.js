/* jshint esversion:6 */
Modeler.prototype.addAgingCurvesButton = function() {
  const modeler = this;

  let group = modeler.layers.base
    .append("g")
    .attr("transform","translate("+(modeler.referencePoints.projectionTypeCoordinates.x + 10)+","+modeler.referencePoints.projectionTypeCoordinates.y+")");

  let rect = group
    .append("rect")
    .attr("fill","none");

  let text = group
    .append("text")
    .attr("x",0)
    .attr("y",0)
    .attr("font-size","10pt")
    .attr("font-weight","normal")
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("cursor","pointer")
    .text("Aging Curve")
    .on('click',() => {


      modeler.similarPlayersButton
        .select("text")
        .attr("fill","black")
        .attr("font-weight","normal");

      modeler.similarPlayersButton
        .select("rect")
        .attr("fill","none")

      rect
        .attr("fill","#ed553b");

      text
        .attr("fill","white");


      modeler.chart
        .showAgingCurveProjection();

        if(modeler.projectionParameters) {
          modeler
            .calculateContractValues();
        }
        
    })
    .on('mouseover',function() {
      modeler.tooltip
        .update("Apply a naive aging curve to the average of the player's last three years of production.")
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


  return group;
};
