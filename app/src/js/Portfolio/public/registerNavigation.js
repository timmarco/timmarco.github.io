Portfolio.prototype.registerNavigation = function() {
  const portfolio = this;

  d3.select("#back-button")
    .on("click",() => {
      portfolio
        .deactivate();
    });

  d3.select("#title")
    .on("click",() => {
      if(portfolio.isActive === true) {
        portfolio
          .deactivate();
      }
    });

  return portfolio;
}
