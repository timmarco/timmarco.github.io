PortfolioItemContent.prototype.h1 = function(string) {
  const content = this;

  content.descriptionDiv
    .append("h1")
    .html(string);

  return content;
}
