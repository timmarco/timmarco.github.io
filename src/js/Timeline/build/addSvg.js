Timeline.prototype.addSvg = function() {
  const timeline = this;

  const svg = d3.select(timeline.where)
    .append("svg")
    .attr("width",timeline.layout.size.width)
    .attr("height",timeline.layout.size.height)
    .style("background-color",timeline.style.backgroundColor);

  return svg;
}
