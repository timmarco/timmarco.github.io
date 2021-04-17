Portfolio.prototype.deactivate = function() {
  const portfolio = this;

  portfolio.isActive = false;
  portfolio
    .resetMetadata();

  d3.select("#back-button")
    .transition()
    .duration(250)
    .style("left","-100vw")


  const baseUrl =  window.location.href;
  window.location.href = baseUrl.split("#")[0] + "#"

  portfolio.detailsBox.transitionOut();
  portfolio.contentPane.transitionOut();

  portfolio.items.forEach((item) => {
    item.title
      .style("background-color","black");
    item.show();
  });

  portfolio.itemsDiv
    .transition()
    .duration(200)
    .style("transform","translate(0,0px)")
    .on("end",() => {
      d3.select("body")
        .style("overflow","auto");
    });


  return portfolio;
}
