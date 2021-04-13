PortfolioItem.prototype.addHeroSource = function() {
  const item = this;
  if(!item.manifest.video) { return }

  if(item.parent.isMobile == true) {
    item.hero
      .attr("src",item.manifest.screenshot);
  }

  return item.hero
    .append("source")
    .attr("src",item.manifest.video);
}
