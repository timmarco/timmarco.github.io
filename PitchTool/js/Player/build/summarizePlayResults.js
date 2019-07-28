/* jshint esversion:6 */
Player.prototype.summarizePlayResults = function() {
  const player = this;
  let summary = d3.nest()
    .key((d) => { return d.playResult; })
    .rollup((d) => { return d.length; })
    .entries(player.rawData);

  return summary;
};
