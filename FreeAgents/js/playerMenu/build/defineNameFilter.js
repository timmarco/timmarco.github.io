/* jshint esversion:6 */
PlayerMenu.prototype.defineNameFilter = function() {
  const menu = this;

  let element;
  let filterInput;

  element = d3.select("#searchPlayers");

  element
    .on('input',() => {
      let value = element.node().value;
      menu.filters.name = value.toLowerCase();
      menu
        .updateFilters();
    })
    .on('mouseover',() => {
      menu.tooltip
        .update("Type to search players.")
        .show()
        .move();
    })
    .on('mousemove',() => {
      menu.tooltip
        .move();
    })
    .on('mouseout',() => {
      menu.tooltip
        .hide();
    });

  return menu;
};
