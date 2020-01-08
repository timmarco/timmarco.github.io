ModelDescriptionBody.prototype.addForeignObject = function() {
  const body = this;

  const foreignObject = body.parent.svg
    .append("foreignObject")
    .attr("x",body.parent.layout.safeAreas.text.x)
    .attr("y",body.parent.layout.safeAreas.text.y + body.parent.layout.size.height)
    .attr("width",body.parent.layout.safeAreas.text.width)
    .attr("height",body.parent.layout.safeAreas.text.height)
    .attr("opacity",0);

  return foreignObject;
}
