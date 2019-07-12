/* jshint esversion:6 */
StatsSection.prototype.addHeader = function(name) {
  const section = this;
  let header;

  header = section.div
    .append("div")
    .classed("stats-section-header",true)
    .html(name);

  return header;
};
