/* jshint esversion:6 */
StatsTable.prototype.addContainer = function(where) {
  const table = this;

  let container;

  container = where
    .append("div")
    .classed("stats-numberline-subsection",true);

  return container;
};
