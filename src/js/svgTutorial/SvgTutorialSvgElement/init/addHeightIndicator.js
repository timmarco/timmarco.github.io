SvgTutorialSvgElement.prototype.addHeightIndicator = function() {
  const element = this;

  const indicator = element.highlightGroup
    .append("line")
    .attr("x1",252.5)
    .attr("x2",252.5)
    .attr("y1",5)
    .attr("y2",305)
    .attr("stroke","#a65628")
    .attr("stroke-width",0);

  return indicator;
}
