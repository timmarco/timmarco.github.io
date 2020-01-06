SvgTutorialSvgElement.prototype.addBackground = function() {
  const element = this;

  const background = element.group
    .append("rect")
    .attr("fill","white")
    .attr("x",0)
    .attr("y",0)
    .attr("width",element.parent.layout.gridHorizontal(6.75))
    .attr("height",element.parent.layout.gridVertical(11.5))
    .attr("fill",element.parent.style.svgElement.background);


  return background;
}
