/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerRow = function(where,player) {
  const menu = this;

  let element;

  element = where
    .append("div")
    .datum(player)
    .classed("player-menu-row",true)
    .classed("player-menu-row-visible",true)
    .classed("player-menu-row-hidden",false);

  return element;

};
