/* jshint esversion:6 */
Tooltip.prototype.matchFangraphs = function(datum) {
  return tooltip.playerMap.filter((a) => { return a.id == datum.id;})[0];
};
