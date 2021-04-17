Portfolio.prototype.resetMetadata = function() {
  const portfolio = this;

  portfolio
    .updateMetadata({
      "titleTag":"Tim Marco",
      "metaDescription":"Portfolio of Tim Marco, a Creative Technologist from Chicago, Illinois"
    });

  return portfolio;
}
