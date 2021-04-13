PortfolioItem.prototype.show = function() {
  const item = this;

  item.state = "inactive";

  item.containerDiv
    .transition()
    .duration(250)
    .style("opacity",1);

  return item;

}
