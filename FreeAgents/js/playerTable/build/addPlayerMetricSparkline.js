/* jshint esversion:6 */
PlayerTable.prototype.addPlayerMetricSparkline = function() {
  const table = this;

  let sparklines = table.subSectionRows
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("center-align",true)
    .style("margin","auto")
    .style("font-weight","normal")
    .style("font-size","8pt")
    .html(function(d) {
      if(d.isHeader) {
        return "Career Performance";
      }
    });

  sparklines
    .each(function(datum,index) {
      let element = d3.select(this);

      if(!datum.isHeader && !datum.isSpacer) {
        let statsArray = [];
        Object.keys(table.player.stats.stats).forEach((year) => {
          if(table.player.stats.stats[year][datum.key] !== undefined) {
            statsArray.push(table.player.stats.stats[year][datum.key]);
          }
        });

        let yDomain = d3.extent(statsArray);
        let sparkline = new Sparkline({
          "where":element,
          "data":statsArray,
          "yDomain":yDomain
        })
        .registerTooltip(tooltip);
      }
    });


  return sparklines;
}
