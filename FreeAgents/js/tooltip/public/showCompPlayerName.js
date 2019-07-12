/* jshint esversion:6 */
Tooltip.prototype.showCompPlayerName = function(compPlayer) {
  const tooltip = this;

  tooltip
    .update(compPlayer)
    .show()
    .move();

  return this;
};
