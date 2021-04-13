PortfolioItemContent.prototype.addContainerDiv = function() {
  const content = this;
  return content.where
    .append("div")
    .classed("content-main-container",true)
}
