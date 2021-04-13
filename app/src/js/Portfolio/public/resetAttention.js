Portfolio.prototype.reset = function() {
  const portfolio = this;

  portfolio.items
    .forEach((item) => {
      item
        .reset();
    });

  return portfolio;
}
