/* jshint esversion:6 */
PlayerTable.prototype.addSubSectionRows = function() {
  const table = this;

  let rows = table.subSectionTables
    .selectAll(".stats-numberline-table-row")
    .data((d) => { return d.metrics})
    .enter()
    .append("div")
    .classed("stats-numberline-table-row",true)
    .classed("stats-number-line-header-row",(d) => { return d.isHeader })
    .classed("stats-numberline-start-group",(d) => { return d.startGroup})
    .classed("stats-number-line-related-to-next",(d) => { return d.relatedToNext })
    .classed("stats-number-line-related-to-previous",(d) => { return d.relatedToPrevious })
    .classed("stats-number-line-end-group",(d) => { return d.endGroup });

  return rows;
}
