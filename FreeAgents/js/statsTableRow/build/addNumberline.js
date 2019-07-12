/* jshint esversion:6 */
StatsTableRow.prototype.addNumberline = function(where) {
  const tableRow = this;
  let element;

  element = where
    .append("div")
    .classed("stats-numberline-table-cell",true);

  let numberlineElement = element
    .append("div")
    .classed("numberline",true)
    .attr("data-key",tableRow.options.key)
    .attr("data-name",tableRow.options.display)
    .attr("id","line_" + tableRow.options.key);

  if(tableRow.options.scaleMin !== null) {
    numberlineElement
      .attr("data-scale-min",tableRow.options.scaleMin);
  }

  if(tableRow.options.scaleMax) {
    numberlineElement
      .attr("data-scale-max",tableRow.options.scaleMax);
  }

  return element;
};
