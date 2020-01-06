SvgTutorialSvgElement.prototype.addContainer = function() {
  const element = this;

  const container = element.group
    .append("rect")
    .attr("x",5)
    .attr("y",5)
    .attr("width",500)
    .attr("height",300)
    .attr("fill","white")
    .attr("stroke","#a65628")
    .attr("stroke-width",2)
    .attr("stroke-opacity",0);

  return container;
}
