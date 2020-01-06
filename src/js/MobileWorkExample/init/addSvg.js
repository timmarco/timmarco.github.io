MobileWorkExample.prototype.addSvg = function() {
  const example = this;

  const svg = example.swipeContainer
    .append("svg")
    .style("padding-left","5vw")
    .attr("width",example.layout.size.width)
    .attr("height",example.layout.size.height)
    .style("background-color","#aaa");

  return svg;
}
