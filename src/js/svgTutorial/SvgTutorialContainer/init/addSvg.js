SvgTutorialContainer.prototype.addSvg = function() {
  const container = this;

  const svg = d3.select(container.where)
    .append("svg")
    .attr("width",container.layout.size.width)
    .attr("height",container.layout.size.height)
    .style("background-color",container.style.stageFill);

  return svg;
}
