PortfolioItem.prototype.activate = function() {
  const item = this;

  item.state = "active";

  // const navbarHeight = d3.select("#navbar").node().getBoundingClientRect().height;
  // const containerHeight = item.containerDiv.node().getBoundingClientRect().height;
  // const startPosition = item.containerDiv.node().getBoundingClientRect();
  // const translate = "translate("+ (-startPosition.x) +"px,"+(-startPosition.y - window.scrollY + navbarHeight)+"px)";
  // const titleHeight = item.getActiveHeight();
  //
  if(item.parent.isMobile == false) {
    item.hero
      .node()
      .pause();
  }
  //
  // item.containerDiv
  //   .style("overflow","visible")
  //   .style("cursor","default")
  //   .style("background-color",'gray')
  //   .transition()
  //   .duration(225)
  //   .ease(d3.easeQuadIn)
  //   .style("height",titleHeight + "px")
  //   .style("transform",translate);
  //

  return item;
}
