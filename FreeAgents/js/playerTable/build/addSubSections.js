/* jshint esversion: 6 */
PlayerTable.prototype.addSubSections = function() {
  const table = this;

  let subSections = table.sections
    .selectAll(".stats-numberline-subsection")
    .data((d) => { return d.tables})
    .enter()
    .append("div")
    .classed("stats-numberline-subsection",true);

  return subSections;
}
