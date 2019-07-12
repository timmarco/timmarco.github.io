/* jshint esversion:6 */
Tooltip.prototype.showStatDefinition = function(description) {
  const tooltip = this;

  tooltip
    .update(description)
    .show()
    .move(d3.event,{x:25});

  return tooltip;
};
