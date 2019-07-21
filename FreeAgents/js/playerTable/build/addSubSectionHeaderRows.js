/* jshint esversion:6 */
PlayerTable.prototype.addSubSectionHeaderRows = function() {
  const table = this;

  let headerRows = table.subSectionTables
    .append("div")
    .classed("stats-numberline-table-row",true);

  headerRows
    .append("div")
    .classed("stats-numberline-header-cell",true)
    .classed("right-align",true)
    .html();

  headerRows
    .append("div")
    .classed("stats-numberline-header-cell",true)
    .html((d) => { return d.headingType });

  headerRows
    .append("div")
    .classed("stats-numberline-header-cell",true)
    .html(table.player.Name);

  headerRows
    .append("div")
    .classed("stats-numberline-header-cell",true)
    .html("Career History");


  return headerRows;
}
