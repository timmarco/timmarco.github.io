/* jshint esversion:6 */
PlayerTable.prototype.addMetricNumberlineCells = function () {
  const table = this;

  let numberlineCells = table.subSectionRows
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("numberline",true)
    .style("width","500px")
    .attr("data-key",(d) => { return d.key; })
    .html("");

  numberlineCells.each(function(d,i) {
    let element = d3.select(this);

    if(!d.isHeader) {
      if(!table.player.comparePlayers.stats.hasOwnProperty(d.key)) {
      } else {
        let numberline;

        numberline = new Numberline({
            "where":element,
            "name":d.display,
            "key":d.key,
            "playerMap":table.player.comparePlayers.stats.playerMap
          })
          .addData(table.player.comparePlayers.stats[d.key])
          .registerTooltip(table.player.tooltip)
          .addHighlightValue(table.player.stats.stats['2018'][d.key],table.player);

          table.numberlines[d.key] = {
            "datum":d,
            "numberline":numberline
          };



      }
    } else {
      let reference = new NumberlineReference({
        "where":element,
        "type":d.headerType,
        "name":table.player.Name
      });
    }
  });

  return numberlineCells;
}
