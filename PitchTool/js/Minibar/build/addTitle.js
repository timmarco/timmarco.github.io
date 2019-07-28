/* jshint esversion:6 */
Minibar.prototype.addTitle = function(options) {
  const bar = this;

  let title = bar.layers.title
    .append("text")
    .attr("x",bar.margins.left)
    .attr("y",bar.margins.top)
    .attr("text-anchor","start")
    .attr("dominant-baseline","baseline")
    .attr("font-family",bar.styles.title.fontFamily)
    .attr("font-size",bar.styles.title.fontSize)
    .attr("font-weight",bar.styles.title.fontWeight)
    .attr("fill",bar.styles.title.fontfill)
    .text(options.title);

  return title;
};
