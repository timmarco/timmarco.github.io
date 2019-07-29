/* jshint esversion:6 */
function FilterTable(options) {
  const table = this;
  init(options);
  return table;

  function init(options) {
    table.title = options.name;
    table.type = options.type;
    table.values = options.values;

    table.div = table.addDiv();
    table.titleDiv = table.addTitleDiv();

    if(table.type == "unique") {
      table.list = table.addList();
      table.listItems = table.addListItems();
    } else {
    }

  }
}
