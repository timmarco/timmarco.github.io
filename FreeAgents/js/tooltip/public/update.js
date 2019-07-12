/* jshint esversion:6 */Tooltip.prototype.update = function(display) {
  const tooltip = this;

  tooltip.div
    .html(display);

  return tooltip;
};
