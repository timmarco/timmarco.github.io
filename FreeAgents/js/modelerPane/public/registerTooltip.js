/* jshint esversion:6 */
ModelerPane.prototype.registerTooltip = function(tooltip) {
  const pane = this;

  pane.tooltip = tooltip;
  console.log("TOOLTIP CALLT!");

  return pane;
};
