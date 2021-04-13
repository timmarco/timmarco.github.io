PortfolioItem.prototype.drawAttention = function() {
  const item = this;

  if(item.parent.isMobile == false) {
    item.hero
      .node()
      .muted = true;

    item.hero
      .node()
      .play();
  }

  item.title
    .style("background-color",d3.schemeCategory10[2]);

  item.textLayer
    .style("transform","scale(1)")
    .transition()
    .ease(d3.easeQuadOut)
    .duration(250)
    .style("transform","scale(1.05)");

  return item;
}
