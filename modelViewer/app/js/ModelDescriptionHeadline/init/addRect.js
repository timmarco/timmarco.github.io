ModelDescriptionHeadline.prototype.addRect = function() {
  const headline = this;

  const rect = headline.group
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("fill","black");

  return rect;
}
