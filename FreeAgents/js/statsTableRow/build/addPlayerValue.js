/* jshint esversion:6 */
StatsTableRow.prototype.addPlayerValue = function(where) {
  const tableRow = this;
  
  let element;

  element = where
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("left-align",true);


  element
    .append("span")
    .classed("stats-numberline-table-player-value",true)
    .attr("data-key",tableRow.options.key);

  return element;
};
