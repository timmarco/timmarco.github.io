/* jshint esversion:6 */
PlayerMenu.prototype.addHeaderRow = function() {
  const menu = this;

  let headerRow = menu.containerElement
    .append("div")
    .classed("player-menu-header-row",true);

  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .html("Player Name");

  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .classed("align-center",true)
    .html("Position");

  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .classed("align-center",true)
    .html("Age");

  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .html("Career bWAR Performance");

  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .html("Career bWAR");

  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .html("2018 bWar");




  return headerRow;
};
