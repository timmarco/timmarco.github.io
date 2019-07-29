/* jshint esversion:6 */
PlayerList.prototype.addPlayerNames = function() {
  const list = this;


  let names = list.tableRows
    .append("div")
    .classed("playerListTableCell",true)
    .style("display",(player) => { return "block"; })
    .html((player) => { return player.name; })
    .on('click',function(player,index) {
      let display = new Player(player);

      let catcherView = new CatcherView({
        "where":d3.select("#tempCatcher"),
        "player":display
      });

      display.registerCatcherView(catcherView);

    });

  return names;
};
