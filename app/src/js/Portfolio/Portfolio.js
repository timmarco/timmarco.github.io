function Portfolio() {
  const portfolio = this;
  init();
  return portfolio;


  function init() {
    portfolio.isMobile = ("ontouchstart" in window)
    portfolio.isActive = false;
    portfolio.itemsDiv = portfolio.addItemsDiv();
    portfolio.items = portfolio.addItems();
    portfolio.detailsBox = portfolio.addDetailsBox();
    portfolio.contentPane = portfolio.addContentPane();

    portfolio
      .registerRouter()
      .registerHashChange()
      .registerNavigation();

  }
}
