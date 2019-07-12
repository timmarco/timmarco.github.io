/* jshint esversion:6 */
Tooltip.prototype.hide = function() {
  const tooltip = this;

  tooltip.div
    .style("display","none");

  return tooltip;
};
