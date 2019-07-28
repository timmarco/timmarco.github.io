/* jshint esversion:6 */
Player.prototype.summaryRollup = function(key) {
  const player = this;
  let summary = d3.nest()
      .key((d) => { return d[key]; })
      .rollup((d) => { return d.length; })
      .entries(player.rawData)
      .sort((a,b) => { return b.value - a.value; });
  return summary;
};
