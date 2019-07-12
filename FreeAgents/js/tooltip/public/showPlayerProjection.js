/* jshint esversion:6 */
Tooltip.prototype.showPlayerProjection = function(playerName,projection) {
  const tooltip = this;

  let display = "The mean comp player for <strong>" + playerName + "</strong> was worth ";
  display += projection.bWar.toFixed(1) + " wins above replacement in their age ";
  display += projection.age + " season.";

  tooltip
    .update(display)
    .show()
    .move();

  return tooltip;
};
