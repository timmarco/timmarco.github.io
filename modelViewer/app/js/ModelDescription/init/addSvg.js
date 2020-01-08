ModelDescription.prototype.addSvg = function() {
  const description = this;

  const svg = d3.select("#rightPane")
    .append("svg")
    .attr("width",description.layout.size.width)
    .attr("height",description.layout.size.height)
    .style("position","absolute")
    .style("left",0)
    .style("top",0)
    .style("z-index",2);

  return svg;
}
