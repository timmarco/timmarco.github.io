/* jshint esversion:6 */
PlayerTable.prototype.addSubSectionHeadings = function() {
  const table = this;

  let headings = table.subSections
    .append("div")
    .classed("stats-subsection-header",true);

  return headings;
}
