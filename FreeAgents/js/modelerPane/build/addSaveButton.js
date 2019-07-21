/* jshint esversion:6 */
ModelerPane.prototype.addSaveButton = function() {
  const pane = this;

  let button,
    rect,
    text;

  button = pane.group
    .append("g")
    .attr("cursor","pointer")
    .attr("transform","translate("+pane.referencePoints.saveButtonCoordinates.x+","+pane.referencePoints.saveButtonCoordinates.y+")")
    .on('click',function() {
      pane.finishEditing();
    });


  rect = button
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",pane.referencePoints.saveButtonSize.width)
    .attr("height",pane.referencePoints.saveButtonSize.height)
    .attr("fill","green");

  text = button
    .append("text")
    .attr("x",pane.referencePoints.saveButtonSize.width / 2)
    .attr("y",pane.referencePoints.saveButtonSize.height / 2)
    .attr("font-size","14pt")
    .attr("font-weight","bold")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("fill","white")
    .text("SAVE");

  // button = new Button({
  //   "where":pane.group,
  //   "text":"Save",
  //   "coordinates":pane.referencePoints.buttonCoordinates
  // }).registerCallback(function() {
  //   pane.finishEditing();
  // });

  return button;
};
