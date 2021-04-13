PortfolioItemContent.prototype.div = function(html) {
  const content = this;

  content.descriptionDiv
    .append("div")
    .html(html);

  return content;
}
