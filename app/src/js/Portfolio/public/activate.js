Portfolio.prototype.activate = function(selectedItem,instantaneous) {
  const portfolio = this;

  portfolio.isActive = true;
  portfolio
    .updateMetadata(selectedItem.manifest);

  const yTop = selectedItem.textDiv.node().getBoundingClientRect().y;
  const navbarHeight = d3.select("#navbar").node().getBoundingClientRect().height;

  const yPosition = -yTop + navbarHeight + 15;
  portfolio.itemsDiv
    .transition()
    .duration(() => { if(instantaneous === true) { return 0 } return 200})
    .style("transform","translate(0,"+yPosition+"px)");

  d3.select("body")
    .style("overflow","hidden");

  const titleSize = d3.select("#title")
    .node()
    .getBoundingClientRect()
    .width + 50;

  d3.select("#back-button")
    .transition()
    .duration(() => { if(instantaneous === true) { return 0 } return 250})
    .style("left","0vw");

  d3.select("#back-button-span")
    .transition()
    .duration(() => { if(instantaneous === true) { return 0 } return 300})
    .style("padding-left",titleSize + "px");

  portfolio.items
    .forEach((item) => {
      if(item === selectedItem) {

        portfolio.detailsBox
          .transitionIn(item,instantaneous);

        portfolio.contentPane
          .transitionIn(item,instantaneous);

        item
          .activate(instantaneous);



        return
      }

      item
        .hide();
    });

  return portfolio;
}
