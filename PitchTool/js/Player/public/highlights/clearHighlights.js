/* jshint esversion:6 */
Player.prototype.clearHighlights = function() {
  const player = this;

  player.catcherView
    .clearHighlight();
    
  return player;
};
