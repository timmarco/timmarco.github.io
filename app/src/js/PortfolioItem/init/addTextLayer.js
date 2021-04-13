PortfolioItem.prototype.addTextLayer = function() {
  const item = this;
  return item.containerDiv
    .append("div")
    .classed("portfolio-item-text-layer",true);
}
