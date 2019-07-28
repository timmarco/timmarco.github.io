/* jshint esversion:6 */
FilterTable.prototype.addListItems = function() {
  const table = this;

  let listItems = table.list
    .selectAll("li")
    .data(table.values)
    .enter()
    .append("li")
    .classed("filterTableListItem",true)
    .html((d) => { return "<span class='filterTableListItemName'>" + d.key + "</span> ("+d.value+")"; });

  return listItems;
};
