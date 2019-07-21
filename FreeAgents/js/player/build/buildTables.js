/* jshint esversion:6 */
Player.prototype.buildTables = function() {
  const player = this;
  player.tables = new PlayerTable(player)
    .registerTooltip(player.tooltip);

  return player;
}
