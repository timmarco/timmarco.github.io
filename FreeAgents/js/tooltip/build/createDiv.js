/* jshint esversion:6 */
Tooltip.prototype.createDiv = function(where) {
  const tooltip = this;
  let div;

  div = d3.select(where)
    .append("div")
    .classed("tooltip",true)
    .html("tooltip");

  return div;
};
