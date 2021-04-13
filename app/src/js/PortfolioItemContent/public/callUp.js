PortfolioItemContent.prototype.callUp = function(string) {
  const content = this;

  content.descriptionDiv
    .append("div")
    .append("div")
    .classed("callUp",true)
    .html(string);

  return content;
}
