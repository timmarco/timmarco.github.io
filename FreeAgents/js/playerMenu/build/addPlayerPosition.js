/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerPosition = function(where,player) {
  const menu = this;

  let element;

  element = where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("player-menu-position",true)
    .classed("align-center",true)
    .html(player.Position);

  return element;

};
