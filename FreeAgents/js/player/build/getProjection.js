/* jshint esversion:6 */
Player.prototype.getProjection = function() {
  const player = this;
  let projection;

  player.projection = new Projection(player.stats);

  return player;
};
