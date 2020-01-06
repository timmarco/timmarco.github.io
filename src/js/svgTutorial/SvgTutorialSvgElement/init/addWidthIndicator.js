SvgTutorialSvgElement.prototype.addWidthIndicator = function() {
  const element = this;

  const indicator = element.highlightGroup
    .append("line")
    .attr("x1",5)
    .attr("x2",505)
    .attr("y1",155)
    .attr("y2",155)
    .attr("stroke","#a65628")
    .attr("stroke-width",0);

  return indicator;
}
