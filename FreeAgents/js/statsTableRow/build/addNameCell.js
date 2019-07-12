/* jshint esversion:6 */
StatsTableRow.prototype.addNameCell = function(where) {
  const tableRow = this;
  let element;

  element = where
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("right-align",true)
    .classed("stats-numberline-stat-name",true)
    .attr("data-description",tableRow.options.description)
    .html(tableRow.options.display);

  return element;  
};
