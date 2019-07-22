/* jshint esversion:6 */
Modeler.prototype.addBBRefWARButton = function() {
  const modeler = this;

  let group  = modeler.layers.base
    .append("g")
    .attr("transform","translate("+(modeler.referencePoints.warFormulationCoordinates.x + 5)+","+modeler.referencePoints.warFormulationCoordinates.y+")");

  let rect = group
    .append("rect");

  let text = group
    .append("text")
    .attr("x",0)
    .attr("y",0)
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("font-size","10pt")
    .attr("fill","white")
    .text("Baseball-Reference")
    .attr("cursor","pointer")
    .on('click',() => {
      modeler.fangraphsWARButton
        .select("text")
        .attr("fill","black")
        .attr("font-weight","normal");

      modeler.fangraphsWARButton
        .select("rect")
        .attr("fill","none");

      rect
        .attr("fill","#ed553b");

      text
        .attr("fill","white");

      modeler
        .showBBRefData();
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

  let textSize = text.node().getBBox();

  rect
    .attr("x",-textSize.width * 0.025)
    .attr("y",-textSize.height * (1.25/2))
    .attr("width",textSize.width * 1.05)
    .attr("height",textSize.height * 1.1)
    .attr("fill","#ed553b");



  return group;
};
