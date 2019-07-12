/* jshint esversion:6 */
StatsTableRow.prototype.addRowElement = function(where) {
  const tableRow = this;
  let element;

  element = where
    .append("div")
    .classed("stats-numberline-table-row",true);

  return element;
};
