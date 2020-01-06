SvgTutorialSvgElement.prototype.addCircle = function() {
  const element = this;

  const circle = element.group
    .append("circle")
    .attr("cx",252.5)
    .attr("cy",152.5)
    .attr("r",25)
    .attr("fill","red")
    .attr("stroke","black")
    .attr("stroke-width",2);

  return circle;
}
