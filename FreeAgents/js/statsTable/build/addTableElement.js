/* jshint esversion:6 */
StatsTable.prototype.addTableElement = function(where) {
  const table = this;

  let tableElement;

  tableElement = where
      .append("div")
      .classed("stats-numberline-table",true);

  return tableElement;
};
