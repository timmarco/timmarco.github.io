DetailsBox.prototype.transitionIn = function(item) {
  const box = this;

  box
    .updateContent(item);

  const navbarHeight = d3.select("#navbar").node().getBoundingClientRect().height;
  const itemHeight = item.getActiveHeight();

  box.containerDiv
    .style("display","block")
    .style("top",navbarHeight + "px")
    .style("left",window.innerWidth + "px")
    .style("height",itemHeight + "px")
    .transition()
    .duration(250)
    .style("left",(window.innerWidth / 2) + "px");


  return box;
}
