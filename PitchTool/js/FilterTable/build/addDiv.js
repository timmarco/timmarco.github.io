/* jshint esversion:6 */
FilterTable.prototype.addDiv = function() {
  const table = this;

  let div = d3.select("#filterTables")
    .append("div")
    .classed("filterTable",true);

  return div;
};
