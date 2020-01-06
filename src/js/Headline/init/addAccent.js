Headline.prototype.addAccent = function() {
  const headline = this;

  const curtain = headline.curtainGroup
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",headline.layout.size.width)
    .attr("height",headline.layout.size.height)
    .attr("fill","white");

  const accent = headline.curtainGroup
    .append("rect")
    .attr("x",0)
    .attr("y",headline.layout.size.height / 2)
    .attr("width",headline.layout.accent.size.width)
    .attr("height",0)
    .attr("fill",headline.style.accent.fill);


  return accent;
}
