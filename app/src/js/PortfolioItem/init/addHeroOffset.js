PortfolioItem.prototype.addHeroOffset = function() {
  const item = this;

  return item.substrate
    .append("div")
    .style("position","relative")
    .style("width","100%")
    .style("min-height","12.5vw")
    .style("height","100%");

}
