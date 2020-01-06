SkillBox.prototype.addSvg = function() {
  const box = this;

  const svg = d3.select("#skillBoxContainer")
    .append("svg")
    .attr("height",box.layout.size.height)
    .attr("width",box.layout.size.width)
    .style("padding-left","5vw")
    .attr("fill","orange");
  return svg;
}
