/* jshint esversion:6 */
PlayerTable.prototype.addContainer = function() {
  const table = this;

  let container = d3.select("#showStats")
    .append("div");

  return container;
}
