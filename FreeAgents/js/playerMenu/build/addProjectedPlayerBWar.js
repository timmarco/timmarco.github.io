/* jshint esversion:6 */
PlayerMenu.prototype.addProjectedPlayerBWar = function(where,player) {
  const menu = this;

  let element;

  element = where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("player-menu-name",true)
    .classed("center-align",true)
    .html((d) => {
      let value = parseFloat(d["3yearZips"]).toFixed(1);
      return value;
    });


}
