/* jshint esversion:6 */
StatsTableRow.prototype.addSparkline = function(where) {
  const row = this;
  let element;

  element = where
    .append("div")
    .classed("stats-numberline-table-row",true)
    .classed("stats-numberline-table-row-sparkline",true)
    .attr("data-key",row.options.key);


  return element;
};
