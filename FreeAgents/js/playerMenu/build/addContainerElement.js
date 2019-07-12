/* jshint esversion:6 */
PlayerMenu.prototype.addContainerElement = function() {
  const menu = this;

  let element;

  element = d3.select("#playerMenu")
    .append("div")
    .classed("player-menu-container",true);

  return element;

};
