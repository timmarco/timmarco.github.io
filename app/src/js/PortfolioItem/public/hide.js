PortfolioItem.prototype.hide = function() {
  const item = this;

  item.containerDiv
    .transition()
    .duration(250)
    .style("opacity",0)

  return item;
}
