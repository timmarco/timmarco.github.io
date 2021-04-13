Portfolio.prototype.addContentPane = function() {
  const portfolio = this;
  return new ContentPane(portfolio);
}
