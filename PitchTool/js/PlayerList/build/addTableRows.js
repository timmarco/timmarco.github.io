/* jshint esversion:6 */
PlayerList.prototype.addTableRows = function() {
  const list = this;
  let rows;

  rows = list.table
    .selectAll(".playerListTableRow")
    .data(list.asArray)
    .enter()
    .append("div")
    .classed("playerListTableRow",true);

  return rows;
};
