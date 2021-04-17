PortfolioItem.prototype.addHero = function() {
  const item = this;

  if(item.parent.isMobile == true) {
    return item.heroOffset
      .append("img")
      .attr("width","100%")
      .attr("height",'100%')
      .style("object-fit","contain")
      .style("margin",0)
      .style("padding",0);
  }

  return item.heroOffset
    .append("video")
    .attr("muted","muted")
    .attr("playsinline",true)
    .style("position","absolute")
    .style("object-fit","cover")
    .style("object-position","center center")
    .style("margin",0)
    .style("padding",0)
    .style("width","100%")
    .style("height","100%")
    .attr("loop",true);
}
