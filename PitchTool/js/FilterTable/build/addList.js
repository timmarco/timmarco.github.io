/* jshint esversion:6 */
FilterTable.prototype.addList = function() {
  const table = this;

  let list = table.div
    .append("ul")
    .classed("filterTableList",true);

  return list;
};
