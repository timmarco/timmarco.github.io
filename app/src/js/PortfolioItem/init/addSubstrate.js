PortfolioItem.prototype.addSubstrate = function() {
  const item = this;
  return item.containerDiv
    .append("div")
    .classed("portfolio-item-substrate",true);
}
