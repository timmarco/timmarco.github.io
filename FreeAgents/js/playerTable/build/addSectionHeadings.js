/* jshint esversion:6 */
PlayerTable.prototype.addSectionHeadings = function() {
  const table = this;

  let headings = table.sections
    .append("h1")
    .html((d) => { return d.name; });

  return headings;
};
