/* jshint esversion:6 */
Modeler.prototype.registerTooltip = function(tooltip) {
  const modeler = this;

  modeler.tooltip = tooltip;
  modeler.chart.tooltip = tooltip;
  modeler.pane
    .registerTooltip(tooltip);

  return modeler;
};
