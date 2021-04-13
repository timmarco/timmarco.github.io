PortfolioItemContent.prototype.addDescriptionDiv = function() {
  const content = this;
  return content.containerDiv
    .append("div")
    .classed("content-description-container",true);
}
