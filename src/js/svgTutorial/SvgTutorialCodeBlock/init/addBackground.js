SvgTutorialCodeBlock.prototype.addBackground = function() {
  const container = this;

  const background = container.parent.layers.codeBlock
    .append("rect")
    .attr("x",container.parent.layout.gridHorizontal(0.25))
    .attr("y",container.parent.layout.gridVertical(0.25))
    .attr("width",container.parent.layout.gridHorizontal(4.5))
    .attr("height",container.parent.layout.gridVertical(11.5))
    .attr("fill",container.parent.style.codeBlock.background);


  return background;
}
