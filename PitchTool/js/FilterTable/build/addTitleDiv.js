/* jshint esversion:6 */
FilterTable.prototype.addTitleDiv = function() {
  const table = this;

  let div = table.div
    .append("div")
    .classed("filterTableTitle",true)
    .html(table.title);

  return div;
};
