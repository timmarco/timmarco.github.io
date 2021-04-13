PortfolioItem.prototype.reset = function() {
  const item = this;

  item.hero.node().pause();

  item.title
    .style("background-color","black");


  item.textLayer
    .transition()
    .ease(d3.easeQuadIn)
    .duration(125)
    .style("transform","scale(1)");

  return item;
}
