/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerAge = function(where,player) {
  const menu = this;

  let element;

  where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("player-menu-position",true)
    .classed("align-center",true)
    .html(player.Age);

  return element;

};
