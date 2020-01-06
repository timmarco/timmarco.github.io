Headline.prototype.addSvg = function() {
  const headline = this;

  const svg = d3.select(headline.where)
    .append("svg")
    .attr("width",headline.layout.size.width)
    .attr("height",headline.layout.size.height);

  return svg;
}
