/* jshint esversion:6 */
StatsTable.prototype.addTableHeaderRow = function(options) {
  const table = this;

  let row;

  row = table.tableElement
    .append("div")
    .classed("stats-numberline-table-row",true);

  row
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("stats-numberline-header-cell",true)
    .classed("align-right",true)
    .html("Metric");

  let referenceContainer = row
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("stats-numberline-header-cell",true);

  let reference = new NumberlineReference({
    "where":referenceContainer,
    "type":options.headerType
  });

  row
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("stats-numberline-header-cell",true)
    .classed("align-left",true)
    .classed("display-player-name",true);

  return row;
};
