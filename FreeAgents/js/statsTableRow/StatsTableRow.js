/* jshint esversion:6 */

function StatsTableRow(options) {
  const tableRow = this;

  init(options);

  return this;

  function init(options) {

    tableRow.options = options;

    tableRow.rowElement = tableRow.addRowElement(options.where);
    tableRow.name = tableRow.addNameCell(tableRow.rowElement);
    tableRow.numberline = tableRow.addNumberline(tableRow.rowElement);
    tableRow.playerValue = tableRow.addPlayerValue(tableRow.rowElement);
    tableRow.sparkLine = tableRow.addSparkline(tableRow.rowElement);

  }


}
