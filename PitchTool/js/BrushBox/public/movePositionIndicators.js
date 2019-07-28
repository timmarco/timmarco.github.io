/* jshint esversion:6 */
BrushBox.prototype.movePositionIndicators = function() {
  const box = this;

  box.groundIndicators.line
    .attr("x1",box.size.width / 2)
    .attr("x2",box.size.width / 2)
    .attr("y1",0)

  box.groundIndicators.bottomCircle
    .attr("cy",0)
    .attr("cx",box.size.width / 2);

  box.groundIndicators.topCircle
    .attr("cx",box.size.width / 2)
    .attr("cy",box.size.height);

  box.groundIndicators.topText
    .attr("x",box.size.width / 2 + 5)
    .attr("y",-5)

  if(!box.dragLock) {
    box.groundIndicators.topText
      .text(box.sizeFormatter(box.coordinates.y));

    box.groundIndicators.bottomText
      .text(box.sizeFormatter(box.coordinates.y - box.size.height));

  }


  box.groundIndicators.bottomText
    .attr("x",box.size.width / 2 + 5)
    .attr("y",box.size.height + 5);

  return box;
}
