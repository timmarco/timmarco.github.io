SvgTutorialSvgElement.prototype.addYIndicator = function() {
  const element = this;

  const indicator = element.highlightGroup
    .append("line")
    .attr("x1",255)
    .attr("x2",255)
    .attr("y1",2.5)
    .attr("y2",152.5)
    .attr("stroke","#a65628")
    .attr("stroke-width",0);

  return indicator;
}
