/* jshint esversion:6 */
StatsSection.prototype.addDiv = function(where) {
  const section = this;
  let div;

  div = d3.select(where)
    .append("div")
    .classed("stat-group-numberline",true);

  return div;
};
