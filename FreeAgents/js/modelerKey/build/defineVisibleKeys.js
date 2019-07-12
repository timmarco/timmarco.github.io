/* jshint esversion:6 */
ModelerKey.prototype.defineVisibleKeys = function() {
  const key = this;
  let visible = {};

  visible.playerHistory = true;
  visible.playerProjections = true;
  visible.similarPlayers = true;
  visible.errorRange = true;
  visible.contractValue = true;

  return visible;
};
