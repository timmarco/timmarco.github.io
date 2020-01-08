ModelDescriptionHeadline.prototype.resizeRect = function() {
  const headline = this;

  const textSize = headline.text.node().getBBox();

  headline.rect
    .attr("width",textSize.width + 20)
    .attr("height",textSize.height + 5);

  headline.text
    .attr("x",10)
    .attr("y",8);

  headline.coordinates.x = headline.parent.layout.safeAreas.title.width - textSize.width - 25;
  headline.group
    .attr("transform","translate("+headline.coordinates.x+","+headline.coordinates.yStart+")");

}
