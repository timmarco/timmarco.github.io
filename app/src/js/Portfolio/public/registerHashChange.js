Portfolio.prototype.registerHashChange = function() {
  const portfolio = this;

  window.onhashchange = () => {
    const location = window.location.href.split("#");
    if(location.length == 1 || location[1] == "") {
      portfolio.deactivate();
    }
  }

  return portfolio;
}
