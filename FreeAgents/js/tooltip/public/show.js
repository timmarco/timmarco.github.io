/* jshint esversion:6 */
Tooltip.prototype.show = function() {
  const tooltip = this;

  tooltip.div
    .style("display","block");

  return tooltip;
};
