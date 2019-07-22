/* jshint esversion:6 */
Modeler.prototype.addEditMarketValueButton = function() {
  const modeler = this;


  let group  = modeler.rightPane
    .append("g")
    .attr("transform","translate("+(modeler.referencePoints.winValueButtonCoordinates.x)+","+modeler.referencePoints.editSalaryButtonCoordinates.y+")");

  let rect = group
    .append("rect");

  let text = group
    .append("text")
    .attr("text-anchor","start")
    .attr("dominant-baseline","normal")
    .attr("font-size","10pt")
    .attr("cursor","pointer")
    .attr("fill","black")
    .attr("x",0)
    .attr("y",3)
    .text("Edit Value of Wins")
    .on('click',modeler.toggleEditView());


  return group;
};
