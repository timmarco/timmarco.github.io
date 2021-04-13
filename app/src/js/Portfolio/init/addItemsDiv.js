Portfolio.prototype.addItemsDiv = function() {
  const portfolio = this;
  return d3.select("#body-content")
    .append("div")
    .attr("id","portfolio-items");
}
