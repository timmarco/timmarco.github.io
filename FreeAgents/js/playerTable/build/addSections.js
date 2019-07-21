/* jshint esversion:6 */
PlayerTable.prototype.addSections = function() {
  const table = this;

  let sections = table.container
    .selectAll(".stat-group-numberline")
    .data(table.player.config.tables)
    .enter()
    .append("div")
    .classed("stat-group-numberline",true);

  return sections;
}
