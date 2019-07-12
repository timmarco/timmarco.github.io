/* jshint esversion:6 */
Tooltip.prototype.showPlayerYear = function(name,datum) {
  let tooltip = this;

  let display = "In <strong>" + name + "'s</strong> ";
  display += " age " + datum.age + " season, he was worth " + datum.bWar.toFixed(1) + " wins above replacement.";

  tooltip
    .update(display)
    .show()
    .move();

  return tooltip;
};
