/* jshint esversion:6 */
function PlayerMenu(loadCallback) {
  const menu = this;

  init();

  return menu;

  function init() {
    menu.currentSort = "";
    menu.filters = menu.defineFilters();
    menu.loadCallback = loadCallback;
    d3.csv("playerMenu.csv")
      .then((players) => {
        menu.showTable(menu,players,loadCallback);
      });
  }


}
