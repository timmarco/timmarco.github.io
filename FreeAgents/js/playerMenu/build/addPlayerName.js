/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerName = function(where,player) {
  const menu = this;

  let element;

  element = where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("player-menu-name",true);

  element
    .append("a")
    .classed("player-name-link",true)
    .html(player.Name)
    .on('click',() => {
      menu.loadCallback(player);
    });

  return element;
};
