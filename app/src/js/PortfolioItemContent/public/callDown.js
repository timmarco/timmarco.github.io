PortfolioItemContent.prototype.callDown = function(string) {
  const content = this;

  content.descriptionDiv
    .append("div")
    .append("div")
    .classed("callDown",true)
    .html(string);

  return content;
}
