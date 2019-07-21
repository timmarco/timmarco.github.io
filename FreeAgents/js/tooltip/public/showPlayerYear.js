/* jshint esversion:6 */
Tooltip.prototype.showPlayerYear = function(name,datum) {
  let tooltip = this;


  let display = name + " was worth <strong>" + datum.bWar.toFixed(1) + "</strong> wins above replacement in his age " + datum.age + " season.";

  tooltip
    .update(display)
    .show()
    .move();

  return tooltip;
};
