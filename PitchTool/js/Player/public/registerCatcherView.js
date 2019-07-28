/* jshint esversion:6 */
Player.prototype.registerCatcherView = function(catcherView) {
  const player = this;

  player.catcherView = catcherView;

  return player;
};
