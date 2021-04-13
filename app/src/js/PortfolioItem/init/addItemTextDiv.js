PortfolioItem.prototype.addTextDiv = function() {
  const item = this;
  return item.textLayer
    .append("div")
    .classed("portfolio-item-text",true);
}
