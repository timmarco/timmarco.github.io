/* jshint esversion:6 */
Minibar.prototype.addSvg = function() {
  const bar = this;

  let svg = bar.where
    .append("svg")
    .attr("width",bar.size.width)
    .attr("height",bar.size.height)
    .on('mouseover',function() { bar.callbacks.mouseover(); })
    .on('mouseout',function() { bar.callbacks.mouseout(); });

  return svg;
};
