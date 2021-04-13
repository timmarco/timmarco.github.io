PortfolioItem.prototype.getActiveHeight = function() {
  const item = this;
  return item.textDiv.node().getBoundingClientRect().height * 1.2;
}
