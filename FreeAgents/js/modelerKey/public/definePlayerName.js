/* jshint esversion:6 */
ModelerKey.prototype.definePlayerName = function(name) {
  const key = this;

  key.playerHistory.playerNameLabel
    .update(name);

  lkey.playerProjections.playerNameLabel
    .update(name);

  return key;
};
