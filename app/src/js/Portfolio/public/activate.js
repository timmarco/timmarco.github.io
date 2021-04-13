Portfolio.prototype.activate = function(selectedItem) {
  const portfolio = this;

  const yTop = selectedItem.textDiv.node().getBoundingClientRect().y;
  const navbarHeight = d3.select("#navbar").node().getBoundingClientRect().height;

  const yPosition = -yTop + navbarHeight + 15;
  portfolio.itemsDiv
    .transition()
    .duration(200)
    .style("transform","translate(0,"+yPosition+"px)");
    
  d3.select("body")
    .style("overflow","hidden");

  const titleSize = d3.select("#title")
    .node()
    .getBoundingClientRect()
    .width + 50;

  d3.select("#back-button")
    .transition()
    .duration(250)
    .style("left",titleSize + "px");

  // TODO: THIS SHOULD BE IN ITEM.ACTIVATE!
  portfolio.items
    .forEach((item) => {
      if(item === selectedItem) {

        portfolio.detailsBox
          .transitionIn(item);

        portfolio.contentPane
          .transitionIn(item);

        item
          .activate();



        return
      }

      item
        .hide();
    });

  return portfolio;
}
