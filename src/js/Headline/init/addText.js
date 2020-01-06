Headline.prototype.addText = function() {
  const headline = this;

  const text = headline.svg
    .append("text")
    .attr("x",headline.layout.text.x)
    .attr("y",headline.layout.text.y)
    .attr("text-anchor","start")
    .attr("dominant-baseline","central")
    .attr("fill",headline.style.text.fontFill)
    .attr("font-family",headline.style.text.fontFamily)
    .attr("font-weight",headline.style.text.fontWeight)
    .attr("font-size","1em")
    .text(headline.string);

  return text;
}
