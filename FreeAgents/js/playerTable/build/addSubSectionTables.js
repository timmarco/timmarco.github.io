/* jshint esversion:6 */
PlayerTable.prototype.addSubSectionTables = function() {
  const table = this;

  let tables = table.subSections
    .append("div")
    .classed("stats-numberline-table",true)
    .html((d) => { return d.name; });

  return tables;
}
