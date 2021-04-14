PortfolioItem.prototype.activate = function() {
  const item = this;

  item.state = "active";

  if(item.parent.isMobile == false) {
    item.hero
      .node()
      .pause();
  }


  return item;
}
