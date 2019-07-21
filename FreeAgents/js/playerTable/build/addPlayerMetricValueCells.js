/* jshint esversion:6 */
PlayerTable.prototype.addPlayerMetricValueCells = function() {
  const table = this;

  let playerValueCells = table.subSectionRows
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("right-align",true)
    .html((d) => {
      if(!table.player.stats.stats['2018'].hasOwnProperty(d.key)) {
      } else {
        if(table.player.stats.stats['2018'][d.key] === null) {
          return "n/a";
        }
        return table.player.stats.stats['2018'][d.key].toFixed(2);
      }
    });


  return playerValueCells;
}
