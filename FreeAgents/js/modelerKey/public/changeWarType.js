/* jshint esversion:6 */
ModelerKey.prototype.changeWarType = function(newType) {
  const key = this;

  key.playerHistory.warLabel
    .update("Career " + newType);

  key.playerProjections.warLabel
    .update("Projected " + newType);

  key.similarPlayers.warLabel
    .update("Career " + newType);

  return key;
};
