/* jshint esversion:6 */
Modeler.prototype.addFangraphsWARButton = function() {
  const modeler = this;

  let group = modeler.layers.base
    .append("g")
    .attr("transform","translate("+250+","+modeler.referencePoints.warFormulationCoordinates.y+")");

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
    .attr("font-weight","normal")
    .attr("cursor","pointer")
    .text("Fangraphs")
    .on('click',() => {
      modeler.BBRefWARButton
        .select("text")
        .attr("fill","black")
        .attr("font-weight","normal");

      modeler.BBRefWARButton
        .select("rect")
        .attr("fill","none")

      modeler.fangraphsWARButton
        .attr("font-weight","bold");

      rect
        .attr("fill","#ed553b");

      text
        .attr("fill","white");


      modeler
        .showFangraphsData();

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

  let textSize = text.node().getBBox();

  rect
    .attr("x",-textSize.width * 0.025)
    .attr("y",-textSize.height * (1.25/2))
    .attr("width",textSize.width * 1.05)
    .attr("height",textSize.height * 1.1);


  return group;
};
