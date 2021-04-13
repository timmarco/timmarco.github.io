PortfolioItem.prototype.addHero = function() {
  const item = this;

  if(item.parent.isMobile == true) {
    return item.substrate
      .append("img")
      .attr("width","100%")
      .attr("height",'100%')
      .style("object-fit","cover")
      .style("margin",0)
      .style("padding",0);
  }
  
  return item.substrate
    .append("video")
    .attr("width","100%")
    .attr("height",'100%')
    .attr("muted","muted")
    .attr("playsinline",true)
    .style("object-fit","cover")
    .style("margin",0)
    .style("padding",0)
    .attr("loop",true);
}
