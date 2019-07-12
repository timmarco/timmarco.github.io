/* jshint esversion:6 */
StatsSection.prototype.addTables = function(options) {
  const section = this;

  let allTables = [];

  if(!options.tables) {return allTables;}

  options.tables.forEach((tableOptions) => {
    tableOptions.where = section.div;
    let table = new StatsTable(tableOptions);
    allTables.push(table);
  });

  return allTables;
};
