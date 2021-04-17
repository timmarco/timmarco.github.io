function Portfolio() {
  const portfolio = this;
  init();
  return portfolio;


  function init() {
    portfolio.isMobile = ("ontouchstart" in window)
    portfolio.titleTag = d3.select("title");
    portfolio.metaDescription = d3.select("head").append("meta").attr("name","description");
    portfolio.isActive = false;
    portfolio.itemsDiv = portfolio.addItemsDiv();
    portfolio.items = portfolio.addItems();
    portfolio.detailsBox = portfolio.addDetailsBox();
    portfolio.contentPane = portfolio.addContentPane();

    portfolio
      .registerRouter()
      .registerHashChange()
      .registerNavigation()
      .resetMetadata();

  }
}
