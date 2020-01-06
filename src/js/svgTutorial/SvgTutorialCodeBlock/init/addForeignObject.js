SvgTutorialCodeBlock.prototype.addForeignObject = function() {
  const container = this;

  const foreignObject = container.parent.layers.codeBlock
    .append("foreignObject")
    .attr("x",container.parent.layout.gridHorizontal(0.375))
    .attr("y",container.parent.layout.gridVertical(0.375))
    .attr("width",container.parent.layout.gridHorizontal(4.25))
    .attr("height",container.parent.layout.gridVertical(11.25));

  return foreignObject;
}
