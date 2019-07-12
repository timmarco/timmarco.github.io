/* jshint esversion:6 */

function StatsTable(options) {
  const table = this;

  init(options);

  return table;

  function init(options) {
    table.container = table.addContainer(options.where);
    table.header = table.addHeader(options.name);
    table.tableElement = table.addTableElement(options.where);
    table.headerRow = table.addTableHeaderRow(options);
    table.rows = options.rows;
    table.rowElements = table.generateRowElements(table.rows);
  }

}
