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
    });

  filterInput = d3.select("#searchPlayers")
    .on('change',() => {
      console.log("INPUT CHANGE");
    });

  return menu;
};
