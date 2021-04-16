DetailsBox.prototype.transitionIn = function(item,instantaneous) {
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
    .duration(() => { if(instantaneous === true) { return 0; } return 250})
    .style("left",(window.innerWidth / 2) + "px");


  return box;
}
