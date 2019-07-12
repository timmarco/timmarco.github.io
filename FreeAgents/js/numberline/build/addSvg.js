/* jshint esversion:6 */
Numberline.prototype.addSvg = function(where) {
  const chart = this;

  let svg;

  svg = d3.select(where)
    .append("svg")
    .attr("width",chart.size.width)
    .attr("height",chart.size.height)
    .on('mouseleave',() => {
      chart.tooltip.hide();
    });

  return svg;
  
};
