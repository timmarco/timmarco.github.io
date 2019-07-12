/* jshint esversion:6 */
PlayerMenu.prototype.add2018PlayerBWar = function(where,player) {
  const menu = this;
  let element;

  let displayBWar;

  if(player.bWar2018 !== "") {
    displayBWar = parseFloat(player.bWar2018).toFixed(1);
  } else {
    displayBWar = "n/a";
  }

  where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("player-menu-war",true)
    .classed("align-center",true)
    .html(displayBWar);

  return element;
};
