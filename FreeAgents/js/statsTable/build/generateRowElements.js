/* jshint esversion:6 */
StatsTable.prototype.generateRowElements = function(rows) {
  const table = this;
  let header;

  if(table.rows) {
    table.rows.forEach((row) => {
      row.where = table.tableElement;
      let tRow = new StatsTableRow(row);
    });
  }

  return header;
};
