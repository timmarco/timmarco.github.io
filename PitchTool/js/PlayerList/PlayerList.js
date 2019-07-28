/* jshint esversion:6 */
function PlayerList(options) {
  const list = this;
  init(options);
  return list;

  function init(options) {
    list.views = options.views;
    
    d3.json('data/players.json')
    .then((rawList) => {
      list.listData = rawList;
      list.asArray = list.recastAsArray();
      list.table = list.addTable();
      list.tableRows = list.addTableRows();
      list.playerNames = list.addPlayerNames();
    });
  }
}
