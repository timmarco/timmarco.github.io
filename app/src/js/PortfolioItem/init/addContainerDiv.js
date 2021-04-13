PortfolioItem.prototype.addContainerDiv = function() {
  const item = this;
  return item.parent.itemsDiv
    .append("div")
    .classed("portfolio-item",true)
    .on("mouseover",() => {
      if(item.state === "active") { return }
      item
        .drawAttention()
    })
    .on("mouseout",() => {
      if(item.state === "active") { return }
      item
        .reset();
    })
    .on("click",() => {
      if(item.state === "active") { return }
      item.parent
        .activate(item);
    })
}
