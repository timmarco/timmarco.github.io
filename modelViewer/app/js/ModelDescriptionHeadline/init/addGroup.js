ModelDescriptionHeadline.prototype.addGroup = function() {
  const headline = this;

  const group = headline.parent.svg
    .append("g")
    .attr("opacity",0)
    .attr("transform","translate(0,"+headline.parent.layout.size.height+")");

  return group;
}
