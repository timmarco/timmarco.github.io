/* jshint esversion:6 */
PlayerMenu.prototype.showTable = function(menu,players) {

  menu.containerElement = menu
    .addContainerElement();

  menu.headerRow = menu
    .addHeaderRow();

  menu.filterRow = menu
    .addFilterRow();

  players.forEach((player) => {
    menu.addPlayerLine(player);
  });

  menu.playerMenuRows = menu.containerElement
    .selectAll(".player-menu-row");

  menu
    .defineNameFilter()
    .definePositionFilters();

};
