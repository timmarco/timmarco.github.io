PortfolioItem.prototype.addTitle = function() {
  const item = this;
  return item.textDiv
    .selectAll(".portfolio-item-title")
    .data(item.manifest.title)
    .enter()
    .append("div")
    .classed("portfolio-item-line",true)
    .append("div")
    .classed("portfolio-item-title",true)
    .style("transform",(datum,index) => {
      if(index > 0) {
        return "translate(0,-0.25em)"
      }
    })
    .html((datum) => { return datum});
}
