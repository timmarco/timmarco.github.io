/* jshint esversion:6 */
StatsTable.prototype.addHeader = function(name) {
  const table = this;
  
  let header;

  header = table.container
    .append("div")
    .classed("stats-subsection-header",true)
    .html(name);

  return header;
};
