Headline.prototype.addBackground = function() {
  const headline = this;

  const background = headline.svg
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",headline.layout.background.size.width)
    .attr("height",headline.layout.background.size.height)
    .attr("fill",headline.style.background.fill);

  return background;
}
