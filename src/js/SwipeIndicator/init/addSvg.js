SwipeIndicator.prototype.addSvg = function() {
  const indicator = this;

  const svg = d3.select("#exampleIndicator")
    .append("svg")
    .attr("width",indicator.layout.size.width)
    .attr("height",indicator.layout.size.height);

  return svg;
}
