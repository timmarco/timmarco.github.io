Portfolio.prototype.updateMetadata = function(manifest) {
  const portfolio = this;

  portfolio.titleTag
    .html(manifest.titleTag);

  portfolio.metaDescription
    .attr("content",manifest.metaDescription);

  return portfolio;
}
