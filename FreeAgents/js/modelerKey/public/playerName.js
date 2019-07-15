/* jshint esversion:6 */
ModelerKey.prototype.playerName = function(name) {
  const key = this;

  key.playerHistory.playerNameLabel
    .updateText(name);

  key.playerProjections.playerNameLabel
    .updateText(name);

  return key;
};
