Portfolio.prototype.addItems = function() {
  const portfolio = this;
  let items = [];
  portfolio.manifest
    .forEach((item) => {
      items.push(new PortfolioItem(portfolio,item));
    });
  return items;
}
