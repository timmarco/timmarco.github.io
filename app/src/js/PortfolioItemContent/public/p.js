PortfolioItemContent.prototype.p = function(string) {
  const content = this;
  content.descriptionDiv
    .append("p")
    .html(string);

  return content;
}
