/* jshint esversion:6 */
PlayerList.prototype.addTable = function() {
  const list = this;
  let table;

  table = d3.select("#playerList")
    .append("div")
    .classed("playerListTable",true);

  return table;
};
