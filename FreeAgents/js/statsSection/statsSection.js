/* jshint esversion:6 */
function StatsSection(options) {
  const section = this;

  init(options);

  return section;

  function init(options) {
    section.div = section.addDiv(options.where);
    section.header = section.addHeader(options.name);
    section.tables = section.addTables(options);
  }
  
}
