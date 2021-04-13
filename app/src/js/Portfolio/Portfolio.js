function Portfolio() {
  const portfolio = this;
  init();
  return portfolio;


  function init() {
    portfolio.isMobile = ("ontouchstart" in window)
    portfolio.itemsDiv = portfolio.addItemsDiv();
    portfolio.items = portfolio.addItems();
    portfolio.detailsBox = portfolio.addDetailsBox();
    portfolio.contentPane = portfolio.addContentPane();

    portfolio
      .registerRouter()
      .registerHashChange();

    d3.select("#back-button")
      .on("click",() => {
        portfolio.deactivate();
      });

  }
}
