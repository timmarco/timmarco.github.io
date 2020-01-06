SkillBoxButton.prototype.resizeRect = function() {
  const button = this;

  const textSize = button.text.node().getBBox();
  const horizontalPadding = 30;

  button.rect
    .attr("x",0)
    .attr("y",0)
    .attr("width",textSize.width + horizontalPadding)
    .attr("height",textSize.height);

  button.curtain
    .attr("x",0)
    .attr("y",textSize.height)
    .attr("width",textSize.width + horizontalPadding)
    .attr("height",0);

  button.text
    .attr("x",textSize.width / 2 + horizontalPadding / 2)
    .attr("y",textSize.height / 2 + 2);

  button.highlightLine
    .attr("x1",textSize.width / 2)
    .attr("x2",textSize.width / 2)
    .attr("y1",textSize.height)
    .attr("y2",textSize.height);


}
