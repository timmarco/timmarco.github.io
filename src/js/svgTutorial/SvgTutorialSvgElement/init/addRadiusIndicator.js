SvgTutorialSvgElement.prototype.addRadiusIndicator = function() {
  const element = this;

  const indicator = element.highlightGroup
    .append("line")
    .attr("x1",252.5)
    .attr("x2",280)
    .attr("y1",152.5)
    .attr("y2",152.5)
    .attr("stroke","blue")
    .attr("stroke-width",0);

  return indicator;
}
