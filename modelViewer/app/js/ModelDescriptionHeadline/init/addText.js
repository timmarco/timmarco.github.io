ModelDescriptionHeadline.prototype.addText = function() {
  const headline = this;

  const text = headline.group
    .append("text")
    .attr("font-size","2em")
    .attr("font-family","Oswald")
    .attr("font-weight",500)
    .attr("fill","white")
    .attr("text-anchor","start")
    .attr("dominant-baseline","hanging")
    .text(headline.textString);

  return text;
}
