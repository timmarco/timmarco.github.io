ModelControls.prototype.addSvg = function() {
  const controls = this;

  const svg = d3.select("#rightPane")
    .append("svg")
    .attr("width",controls.layout.size.width)
    .attr("height",controls.layout.size.height)
    .style("position","absolute")
    .style("left",0)
    .style("bottom",0)
    .style("background-color","red")
    .style("z-index",2);

  return svg;
}
