Portfolio.prototype.registerRouter = function() {
  const portfolio = this;

  const route = window.location.href.split("#")[1];
  if(route) {
    const matchingRoute = portfolio.items.filter((item) => { return item.manifest.route == route});
    if(matchingRoute.length == 1) {
      portfolio
        .activate(matchingRoute[0],true);
    }
  }

  return portfolio;
}
