/* jshint esversion:6 */

function Tooltip(options) {
  const tooltip = this;

  init(options);

  return tooltip;

  function init(options) {
    tooltip.div = tooltip.createDiv(options.where);
  }

}
