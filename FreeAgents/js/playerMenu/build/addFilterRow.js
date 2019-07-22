/* jshint esversion:6 */
PlayerMenu.prototype.addFilterRow = function() {
  const menu = this;

  let blankRow = menu.containerElement
    .append("div")
    .classed("player-menu-header-row",true)
    .attr("id","filterNameRow")
    .style("height","50px");

  blankRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .classed("align-left",true)
    .html("<input type='text' id='searchPlayers' length='30' placeholder='Filter By Name...'/>");

  blankRow
    .append("div")
    .classed("player-menu-header-cell",true);


  blankRow
    .append("div")
    .classed("player-menu-header-cell",true);

  blankRow
    .append("div")
    .classed("player-menu-header-cell",true);

  blankRow
    .append("div")
    .classed("player-menu-header-cell",true);

  blankRow
    .append("div")
    .classed("player-menu-header-cell",true);



  return blankRow;
};
